# LCC Server Dockerfile for Linux AMD64
FROM ubuntu:20.04

WORKDIR /app

# Copy the binary file
COPY lcc-server-bin .

# Expose the port that the server listens on
EXPOSE 8080

# Run the server
CMD ["./lcc-server-bin"]