# Robert Sanford HVAC Website Deployment Guide

## Quick Start

### Method 1: Using Git

```bash
# Clone the repository
git clone https://github.com/strophic/robert-sanford-hvac.git
cd robert-sanford-hvac

# Install dependencies
pnpm install

# Build the project
pnpm run build

# The built files will be in the dist/ directory
```

### Method 2: Manual File Upload to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Enter repository name
   - Choose 'Public' visibility
   - Click 'Create repository'

2. Upload files through GitHub web interface:
   - Click 'uploading an existing file' on the new repository page
   - Drag and drop files or use the file chooser
   - Maintain this structure:
     ```
     ├── src/
     │   ├── components/
     │   ├── pages/
     │   └── styles/
     ├── public/
     ├── package.json
     ├── astro.config.mjs
     └── tailwind.config.cjs
     ```

## Build and Deployment

### Requirements
- Node.js 16.x or higher
- pnpm (recommended) or npm

### Environment Variables
None required for basic setup.

### Build Commands
```bash
# Install dependencies
pnpm install

# Development mode
pnpm run dev

# Production build
pnpm run build
```

### Hosting Options

1. **Netlify (Recommended)**
   - Connect your GitHub repository
   - Build command: `pnpm run build`
   - Publish directory: `dist`

2. **Traditional Hosting**
   - Upload contents of `dist/` directory to your web server
   - Ensure your server supports:
     - HTML5
     - Static file serving
     - URL rewriting (optional)

### Common Troubleshooting

1. **Build Failures**
   - Ensure Node.js version is 16.x or higher
   - Clear node_modules and package-lock.json:
     ```bash
     rm -rf node_modules package-lock.json
     pnpm install
     ```

2. **Missing Dependencies**
   - Run `pnpm install` to install all dependencies

3. **Styling Issues**
   - Verify Tailwind CSS is properly built:
     ```bash
     pnpm run build
     ```

4. **404 Errors**
   - Check if your server is configured to serve `index.html` for all routes
   - Verify all assets are properly referenced with correct paths

## Support

For additional help:
1. Check [Astro Documentation](https://docs.astro.build)
2. Visit [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Contact your hosting provider for platform-specific issues

## File Structure

```
├── dist/           # Built files (generated after build)
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable UI components
│   ├── pages/      # Route pages
│   └── styles/     # CSS files
├── package.json    # Project dependencies
└── astro.config.mjs # Astro configuration
```
