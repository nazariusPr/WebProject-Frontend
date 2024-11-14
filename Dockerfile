# Use the official Node 20.16.0 Alpine image as the base image
FROM node:20.16.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies (including typescript and vite)
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port (Vite default port is 5173)
EXPOSE 9091

# Start the app in development mode using Vite
CMD ["npm", "run", "dev"]
