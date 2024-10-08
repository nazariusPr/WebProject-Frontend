import { useNavigate } from "react-router-dom";
import CloseButton from "../components/UI/CloseButton";
import withPopUp from "../hoc/withPopUp/withPopUp";

function GenerateImagePage() {
  const navigate = useNavigate();
  return (
    <CloseButton
      onClick={() => {
        navigate(-1);
      }}
    />
  );
}

export default withPopUp(GenerateImagePage);
