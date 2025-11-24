# LCC Server Dockerfile for macOS AMD64
FROM alpine:latest

WORKDIR /app

# Install dependencies if needed
RUN apk add --no-cache bash

# Copy the binary file
COPY lcc-server-bin .

# Expose the port that the server listens on
EXPOSE 8080

# Run the server
CMD ["./lcc-server-bin"]