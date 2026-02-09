FROM oven/bun:latest

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN bun install

# Copy application files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Run the dev server
CMD ["bun", "run", "dev", "--host"]
