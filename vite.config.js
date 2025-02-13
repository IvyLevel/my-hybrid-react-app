import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Set port to 5173 (or any other port you prefer)
  },
  resolve: {
    alias: {
      '@memberstack/react': '@memberstack/react/dist/index.js', // Path to the correct dist file
    },
  },
});
