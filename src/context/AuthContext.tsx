import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { refreshToken } from "../api/authenticationApi";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  accessTokenLoading: boolean;
};

const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [accessTokenLoading, setAccessTokenLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await refreshToken();
        setAccessToken(response.data.access_token);
      } catch {
        setAccessToken(null);
      } finally {
        setAccessTokenLoading(false);
      }
    };
    fetchMe();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = axios.interceptors.request.use((config) => {
      if (config.auth && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    return () => {
      axios.interceptors.request.eject(authInterceptor);
    };
  }, [accessToken]);

  useLayoutEffect(() => {
    const refreshInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response.status === 403 &&
          error.response.data === "Not valid JWT" &&
          !originalRequest._retry
        ) {
          try {
            const response = await refreshToken();
            const access_token = response.data.access_token;
            setAccessToken(access_token);

            originalRequest.headers.Authorization = `Bearer ${access_token}`;
            originalRequest._retry = true;

            return axios(originalRequest);
          } catch (err) {
            setAccessToken(null);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(refreshInterceptor);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, accessTokenLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
