import esbuild from 'esbuild'

esbuild.build({
    entryPoints: ['linkstrip.ts'],
    bundle: true,
    outfile: 'main.js',
    target: 'es2020',
    platform: 'browser',
    format: 'cjs',
    external: ['obsidian'],
}).catch(() => process.exit(1));