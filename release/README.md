# LCC Server Release Structure

This directory contains the released versions of the LCC server for different platforms.

## Directory Structure

```
release/
├── v1.0/
│   ├── linux/
│   │   └── amd64/
│   │       ├── Dockerfile
│   │       └── lcc-server-bin
│   ├── windows/
│   │   └── amd64/
│   │       ├── Dockerfile
│   │       └── lcc-server-bin.exe
│   └── darwin/
│       └── amd64/
│           ├── Dockerfile
│           └── lcc-server-bin
```

## Platform Support

- **Linux**: AMD64 architecture
- **Windows**: AMD64 architecture
- **macOS**: AMD64 architecture (darwin)

Each platform directory contains:
1. A Dockerfile for containerizing the LCC server
2. The compiled binary file for that platform

## Usage

To use a specific version and platform:

1. Navigate to the appropriate directory
2. Build the Docker image:
   ```
   docker build -t lcc-server .
   ```
3. Run the container:
   ```
   docker run -p 8080:8080 lcc-server
   ```