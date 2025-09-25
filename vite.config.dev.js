const path = require('path')
const { defineConfig } = require('vite')
const { xconVitePlugin } = require('@xcons/vite-plugin')

// XCon Widget Development Configuration
// Optimized for TypeScript widget development with debug support
module.exports = defineConfig({
    root: '.',

    server: {
        port: 4201,
        host: 'localhost',
        open: false, // VS Code will handle browser opening
        cors: true,

        // XCon development server headers
        headers: {
            'X-XCon-Dev-Server': 'XCon Widget Development Kit',
            'X-Powered-By': 'XCon Studio'
        }
    },

    build: {
        // XCon Widget development build settings
        sourcemap: true,     // Essential for VS Code debugging
        minify: false,       // Keep code readable for development
        target: 'es2020'     // Modern browser target
    },

    // Enhanced build settings for XCon widgets
    esbuild: {
        target: 'es2020',
        keepNames: true,     // Preserve function names for debugging
        sourcemap: true,     // Generate source maps
    },

    define: {
        'process.env.NODE_ENV': '"development"',
        'global': 'globalThis',
        '__XCON_DEV__': true,
        '__XCON_VERSION__': '"development"',
        '__XCON_WIDGET_DEV_KIT__': '"XCon Widget Development Kit"',
        '__XCON_BUILD_MODE__': '"development"'
    },

    css: {
        devSourcemap: true,  // CSS source maps for styling debug

        // XCon Widget CSS preprocessing
        preprocessorOptions: {
            scss: {
                additionalData: `// XCon Widget SCSS Development\n`
            }
        }
    },

    plugins: [
        // XCon Widget Development Plugin
        xconVitePlugin({
            development: true,
            sourceMap: true,
            minifyTemplates: false,
            minifyStyles: false,
            removeComments: false,
            preserveWhitespace: true,
            watchFiles: true,
            useTerser: false,
            logger: {
                enabled: true,
                level: 3, // DEBUG level for development
                prefix: 'XCon-Dev',
                timestamp: true,
                colors: true,
                logLevel: 'info'
            },
            showProcessedFiles: false // Keep console clean
        }),

        // XCon Development Enhancement Plugin
        {
            name: 'xcon-dev-enhancements',
            configureServer(server) {
                // XCon development server middleware
                server.middlewares.use((req, res, next) => {
                    // Log XCon widget requests
                    if (req.url?.includes('src/widget')) {
                        console.log(`🎯 [XCon] Widget request: ${req.url}`)
                    }
                    next()
                })

                // Custom startup message
                server.printUrls = () => {
                    console.log('\n🚀 XCon Widget Development Server:')
                    console.log(`   Local:   http://localhost:4201/`)
                    console.log(`   Debug:   VS Code F5 → "🎯 XCon Widget Debug"`)
                    console.log(`   Docs:    XCon Widget Development Kit\n`)
                }
            },

            buildStart() {
                console.log('🔨 XCon Widget development build starting...')
            },

            buildEnd() {
                console.log('✅ XCon Widget development build completed!')
            }
        }
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~xcon': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'src')
        }
    },

    // XCon Widget dependency optimization
    optimizeDeps: {
        include: ['@xcons/widget'],
        force: false, // Don't force rebuild unless necessary

        esbuildOptions: {
            banner: {
                js: '// XCon Widget Dependencies - Development'
            }
        }
    },

    // Development logging
    logLevel: 'info',
    clearScreen: false, // Keep terminal history for debugging
})