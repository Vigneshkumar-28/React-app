# Use a base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use an nginx server to serve the built files
FROM nginx:stable-alpine

# Copy the built files to NGINX's default folder
COPY --from=0 /app/build /usr/share/nginx/html

# Change NGINX config to listen on port 3200
RUN sed -i 's/listen       80;/listen       3200;/' /etc/nginx/nginx.conf

# Expose port 3200
EXPOSE 3200

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
