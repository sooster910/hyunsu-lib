/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dts({insertTypesEntry: true})],
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src'),
      "@/lib":resolve(__dirname, 'src/lib')
    }
  },
  test: {
    globals: true,
    css: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"], // Jest DOM 설정을 포함한 파일 경로
  },
  build:{
    outDir: './dist',
    lib:{
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'hedgehog-ui',
      fileName:"index"
    },   
    rollupOptions:{
      external: ['react','react-dom'],
      output:{
        globals:{
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
    
  }
});

