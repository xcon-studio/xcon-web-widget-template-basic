const path = require('path')
const { defineConfig } = require('vite')
const { xconVitePlugin } = require('@xcons/vite-plugin')

// XCon Widget Production Configuration
// Single bundle output optimized for XCON platform
module.exports = defineConfig({
    mode: 'production',
    root: '.',

    build: {
        outDir: 'dist',

        // Production source maps - hidden for security but available for debugging
        sourcemap: 'hidden',

        // Production optimizations
        target: 'es2020',
        minify: 'terser',

        // Single file bundle - no chunks for widget
        rollupOptions: {
            external: ['jquery', '$', '@xcons/widget'], // Don't bundle external dependencies

            output: {
                globals: {
                    'jquery': 'jQuery',
                    '$': '$',
                    '@xcons/widget': 'XconWidget'
                },

                // Single widget file output
                entryFileNames: 'widget.js',
                chunkFileNames: 'widget.js', // Force single file
                assetFileNames: 'assets/[name][extname]',

                // Prevent code splitting - single bundle
                manualChunks: undefined,
                inlineDynamicImports: true
            }
        },

        // Terser options for widget optimization
        terserOptions: {
            compress: {
                drop_console: true,     // Remove console.log in production
                drop_debugger: true,    // Remove debugger statements
                pure_funcs: ['console.info', 'console.debug'], // Remove specific console methods
                passes: 2,              // Multiple optimization passes
                unsafe: false,          // Keep widget compatibility
                unsafe_comps: false     // Safe for XCON platform environment
            },
            mangle: {
                safari10: true,         // Safari 10 support
                keep_fnames: false,     // Can mangle function names in production
                reserved: ['Widget', 'IWidget', 'WidgetContext', 'XconWidget'] // Keep XCon specific names
            },
            format: {
                comments: false         // Remove comments
            }
        },

        // Bundle analysis
        reportCompressedSize: true,
        chunkSizeWarningLimit: 500, // 500KB widget warning (widgets should be smaller)

        // Asset optimization
        assetsDir: 'assets',
        copyPublicDir: false,

        // Ensure single file output
        lib: false // Don't use library mode, keep as application bundle
    },

    // Production ESBuild settings
    esbuild: {
        target: 'es2020',
        minify: true,
        treeShaking: true,
        keepNames: false, // Allow name mangling in production

        // Remove development code
        drop: ['console', 'debugger'],

        // Production defines
        define: {
            '__XCON_DEV__': 'false',
            '__XCON_BUILD_MODE__': '"production"'
        }
    },

    define: {
        'process.env.NODE_ENV': '"production"',
        'global': 'globalThis',
        '__XCON_DEV__': false,
        '__XCON_VERSION__': '"1.0.0"',
        '__XCON_WIDGET_DEV_KIT__': '""',
        '__XCON_BUILD_MODE__': '"production"'
    },

    // CSS optimization
    css: {
        devSourcemap: false, // No CSS source maps in production

        // CSS minification
        postcss: {
            plugins: [
                // Add autoprefixer, cssnano etc. if needed
            ]
        }
    },

    plugins: [
        // XCon Widget Production Plugin
        xconVitePlugin({
            development: false,
            sourceMap: false, // Let Vite handle source maps

            // Production optimizations
            minifyTemplates: true,
            minifyStyles: true,
            removeComments: true,
            preserveWhitespace: false,
            watchFiles: false, // No watching in production
            useTerser: true,   // Use Terser for better optimization

            // Terser options for templates/styles
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    passes: 3
                },
                mangle: {
                    reserved: ['Widget', 'IWidget', 'WidgetContext', 'XconWidget']
                },
                format: {
                    comments: false
                }
            },

            logger: {
                enabled: true,
                logLevel: 'warn', // Only warnings and errors
                prefix: 'XCon-Prod',
                timestamp: false,
                colors: false
            },

            showProcessedFiles: false, // No verbose logging
            fileExtensions: ['.ts', '.js'],
            templateExtensions: ['.tbhtml', '.html'],
            styleExtensions: ['.css', '.scss', '.sass']
        }),

        // Production optimization plugin
        {
            name: 'xcon-production-optimizations',

            generateBundle(options, bundle) {
                // Log widget bundle information
                console.log('\n📦 XCon Widget Production Build:');

                let totalSize = 0;
                const files = [];

                Object.entries(bundle).forEach(([fileName, chunk]) => {
                    if (chunk.type === 'chunk' || chunk.type === 'asset') {
                        const size = chunk.type === 'chunk' ? chunk.code.length : chunk.source.length;
                        totalSize += size;
                        files.push({
                            name: fileName,
                            size: (size / 1024).toFixed(2) + ' KB',
                            type: chunk.type
                        });
                    }
                });

                files.forEach(file => {
                    const icon = file.type === 'chunk' ? '🎯' : '📄';
                    console.log(`   ${icon} ${file.name}: ${file.size}`);
                });

                console.log(`   📊 Total Widget Size: ${(totalSize / 1024).toFixed(2)} KB\n`);

                // Warn about large widget bundles
                if (totalSize > 300000) { // 300KB
                    console.warn('⚠️  Widget bundle is large (>300KB). Consider optimization.');
                } else if (totalSize > 100000) { // 100KB
                    console.log('✅ Widget bundle size is acceptable (>100KB but <300KB)');
                } else {
                    console.log('🎉 Widget bundle is optimally sized (<100KB)');
                }
            },

            buildStart() {
                console.log('🔨 XCon Widget production build starting...');
            },

            buildEnd() {
                console.log('✅ XCon Widget production build completed!');
            }
        }
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~xcon': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.js', '.json']
    },

    // Production dependency optimization
    optimizeDeps: {
        include: [],
        exclude: ['@xcons/widget'], // Don't pre-bundle in production

        esbuildOptions: {
            banner: {
                js: '// XCon Widget - Production Bundle'
            }
        }
    },

    // Minimal logging for production
    logLevel: 'warn',
    clearScreen: true,

    // Production specific settings
    json: {
        stringify: false
    }
})