# Step 1: Build the React application
FROM node:14 AS build
WORKDIR /app
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Step 2: Serve the CRA application
EXPOSE 3000
CMD ["npm", "start"]