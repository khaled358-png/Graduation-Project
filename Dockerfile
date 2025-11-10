# Use Node 14 image (stable and works on old systems)
FROM node:14

# Set working directory
WORKDIR /app

# Copy app folder into container
COPY app ./app

# Create package.json inside container
RUN echo '{"name":"random-cat-app","version":"1.0.0","main":"app/app.js","dependencies":{"express":"^4.18.2","axios":"^1.5.0"}}' > package.json

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "app/app.js"]

