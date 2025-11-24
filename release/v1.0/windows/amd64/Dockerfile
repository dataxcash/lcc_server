# LCC Server Dockerfile for Windows AMD64
FROM mcr.microsoft.com/windows/servercore:ltsc2019

WORKDIR /app

# Copy the binary file
COPY lcc-server-bin.exe .

# Expose the port that the server listens on
EXPOSE 8080

# Run the server
CMD ["lcc-server-bin.exe"]