import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Ignore root directory junk to prevent hitting the Android system watcher limit
      ignored: ['**/node_modules/**', '**/.npm/**', '**/go/**', '**/storage/**']
    }
  },
  optimizeDeps: {
    // Force Vite to only scan this project's index file
    entries: ['./index.html']
  }
});
