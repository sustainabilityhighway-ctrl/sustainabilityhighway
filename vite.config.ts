import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    compression({
      algorithms: ['gzip'],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    // Brotli compression
    compression({
      algorithms: ['brotliCompress'],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'supabase': ['@supabase/supabase-js'],
          'editor': ['react-quill'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@supabase/supabase-js'],
  },
});
