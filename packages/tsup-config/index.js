import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
    splitting: true,
    sourcemap: true,
    dts: true,
    clean: !options.watch,
    minify: !options.watch,
    format: ['cjs', 'esm'],
    shims: true,
    outDir: 'build',
}));
