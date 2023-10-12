
FROM node:18.17.1-alpine as nodework
# Set the working directory within the container
WORKDIR /website

# Copy package.json and package-lock.json to the container
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
# WORKDIR /app/frontend

COPY . .

# Build the React app
# EXPOSE 3000
RUN npm run build 


FROM nginx:1.25.2-alpine

WORKDIR /user/share/nginx/html

RUN rm  -rf ./*

COPY --from=nodework /website/build .

ENTRYPOINT [ "nginx" ,"-g","daemon off;"]
