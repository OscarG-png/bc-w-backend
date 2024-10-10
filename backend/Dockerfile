# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Build the TypeScript files
RUN npm run build

# Expose the port your app runs on
EXPOSE 3001

# Command to run the application
CMD ["npm", "run", "dev"]
