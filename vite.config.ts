import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
 plugins: [react()],
 resolve: {
   alias: {
     '@': path.resolve(__dirname, './src')
   }
 },
 server: {
   port: 5173,
   strictPort: true,
   hmr: {
     protocol: 'ws',
     host: 'localhost',
     port: 5173,
     clientPort: 5173,
   },
   watch: {
     usePolling: true,
     interval: 100
   }
 },
 optimizeDeps: {
   exclude: ['lucide-react']
 },
 build: {
   chunkSizeWarningLimit: 1000,
   rollupOptions: {
     output: {
       manualChunks: {
         vendor: ['react', 'react-dom', 'react-router-dom'],
         icons: ['lucide-react']
       }
     }
   }
 }
});