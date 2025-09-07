# XCON Widget Project

This project is a TypeScript widget developed for the XCON platform using modern development tools and comprehensive IDE support.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Opens http://localhost:4201 for testing
```

### Production Build

```bash
# Build optimized widget for XCON platform
npm run build

# Output: dist/widget.js (upload this to XCON)
```

## 📁 Project Structure

```
├── .vscode/              # VS Code configuration
├── .idea/                # WebStorm/IntelliJ configuration  
├── .xcon/                # XCON platform configuration
├── src/
│   ├── widget.ts         # Main widget class
│   ├── widget.css        # Widget styles
│   └── widget.tbhtml     # Widget template
├── dist/                 # Build output
├── package.json          # Dependencies & scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.js        # Production build
├── vite.config.dev.js    # Development build
└── index.html            # Development test page
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run serve` | Alternative development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Clean dist folder |

## 🎯 Widget Development

### Main Widget Class (`src/widget.ts`)

The main widget class uses TypeScript decorators and implements the XCON widget lifecycle:

```typescript
@Widget({
    widgetName: 'My Widget',
    selector: 'my-widget',
    templateUrl: './widget.tbhtml',
    styleUrls: ['./widget.css']
})
export default class MyWidget implements IWidget {
    // Widget implementation
}
```

### Widget Template (`src/widget.tbhtml`)

XCON-specific template format with resource loading and content binding:

```html
<widget widget-title="My Widget">
    <resources>
        <!-- External CSS/JS resources -->
    </resources>
    <content>
        <!-- Widget HTML content -->
    </content>
</widget>
```

### Widget Styles (`src/widget.css`)

Standard CSS for widget styling with responsive design support.

## 🔧 IDE Support

### VS Code
- **Press F5** to start debugging
- Integrated terminal tasks
- TypeScript IntelliSense
- Recommended extensions

### WebStorm/IntelliJ IDEA
- Use **"XCon Widget Debug"** run configuration
- Integrated TypeScript compiler
- Code quality inspections
- File watchers for auto-compilation

## 📦 Deployment

### Build for XCON Platform

1. Build the widget:
   ```bash
   npm run build
   ```

2. Upload `dist/widget.js` to XCON platform

3. Configure widget in XCON dashboard

### Development Testing

The project includes a test page (`index.html`) for local development:

```bash
npm run dev
# Visit http://localhost:4201 to test widget
```

## 🎨 Widget Features

This template includes examples of:

- **Text Binding** - Dynamic content updates
- **Attribute Binding** - Input property control
- **Class Binding** - Dynamic CSS classes
- **Event Handling** - Interactive controls
- **External Resources** - CSS/JS library integration

## 🔍 Configuration

### TypeScript Configuration (`tsconfig.json`)
- ES2020 target for modern browsers
- Decorator support enabled
- Source maps for debugging
- Strict type checking

### Vite Configuration
- **Development** (`vite.config.dev.js`): Hot reload, source maps
- **Production** (`vite.config.js`): Optimized, minified bundle

### XCON Configuration (`.xcon/config.json`)
Platform-specific build and deployment settings.

## 🐛 Debugging

### VS Code Debugging
1. Set breakpoints in TypeScript code
2. Press **F5** or use Debug panel
3. Browser opens with debugger attached

### WebStorm Debugging
1. Set breakpoints in source files
2. Use **"XCon Widget Debug"** configuration
3. Debug in integrated browser

### Browser DevTools
- Source maps enabled for development
- TypeScript code visible in Sources panel
- Console logging available

## 📚 Documentation

For detailed widget development documentation, see:
- `@xcons/widget` - Widget framework API
- XCON Platform docs - Platform integration
- TypeScript docs - Language features

## 🔧 Troubleshooting

### Common Issues

**Build errors:**
```bash
npm run clean
npm install
npm run build
```

**Port 4201 in use:**
```bash
npx kill-port 4201
npm run dev
```

**TypeScript errors:**
- Check `tsconfig.json` configuration
- Verify `@xcon/widget` types are installed
- Use IDE TypeScript service restart

**Widget not loading in XCON:**
- Verify `dist/widget.js` file exists
- Check browser console for errors
- Ensure widget selector matches configuration

## 📝 Development Workflow

1. **Edit widget code** in `src/` directory
2. **Test changes** with `npm run dev`
3. **Debug issues** using IDE debugging
4. **Build for production** with `npm run build`
5. **Deploy to XCON** platform

## 🏗️ Build Output

### Development Build
- Source maps included
- Unminified for debugging
- Hot reload enabled

### Production Build
- Minified and optimized
- Single `widget.js` bundle
- Ready for XCON platform upload

## 📄 License

MIT - See LICENSE file for details

---

**Built with XCON CLI** 🚀