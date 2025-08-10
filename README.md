# CodePlayground

CodePlayground is an interactive web-based code editor designed for writing and previewing HTML, CSS, and JavaScript in real-time. Built as a modern single-page application, it provides developers with an intuitive interface to experiment with front-end code without the need for a complex development environment. The editor features syntax highlighting, live preview capabilities, and automatic local storage persistence to ensure work is never lost between sessions.



## Tech Stack

- ReactJS
- TailwindCSS
- Vite
- Docker

## Running the Project

### Local Development

```bash
# Clone the repository
git clone https://github.com/saksham-2000/CodePlayground.git
cd CodePlayground

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

### Docker Deployment

```bash
# Build the Docker image
docker build -t codeplayground .

# Run the container
docker run -p 3000:3000 codeplayground
```

Access the application at `http://localhost:3000`

**Additional Docker commands:**

```bash

# View logs
docker logs codeplayground-app

# Stop and remove container
docker stop codeplayground-app
docker rm codeplayground-app
```
