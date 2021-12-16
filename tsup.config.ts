import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  splitting: true,
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs', 'iife'],
});
