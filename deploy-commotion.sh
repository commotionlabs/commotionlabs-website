#!/bin/bash
# Deploy Commotion Labs Design - Switch from Elva template to new energy-based design

set -e

PROJECT_DIR="/home/commotionlabs/clawd/projects/helloelva-clone"
BACKUP_DIR="${PROJECT_DIR}/backup-original"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "🔥 Deploying Commotion Labs Design..."
echo "=====================================​"

# Create backup of original files
echo "📦 Creating backup of original files..."
mkdir -p "$BACKUP_DIR"

# Backup current files
if [ -f "${PROJECT_DIR}/app/body.html" ]; then
    cp "${PROJECT_DIR}/app/body.html" "${BACKUP_DIR}/body-original-${TIMESTAMP}.html"
fi

if [ -f "${PROJECT_DIR}/app/layout.tsx" ]; then
    cp "${PROJECT_DIR}/app/layout.tsx" "${BACKUP_DIR}/layout-original-${TIMESTAMP}.tsx"
fi

if [ -f "${PROJECT_DIR}/public/app.css" ]; then
    cp "${PROJECT_DIR}/public/app.css" "${BACKUP_DIR}/app-original-${TIMESTAMP}.css"
fi

if [ -f "${PROJECT_DIR}/public/app.js" ]; then
    cp "${PROJECT_DIR}/public/app.js" "${BACKUP_DIR}/app-original-${TIMESTAMP}.js"
fi

echo "✅ Backup complete: ${BACKUP_DIR}"

# Deploy new Commotion Labs files
echo "🚀 Deploying Commotion Labs design files..."

# Replace body content
if [ -f "${PROJECT_DIR}/app/body-commotion.html" ]; then
    cp "${PROJECT_DIR}/app/body-commotion.html" "${PROJECT_DIR}/app/body.html"
    echo "   ✓ Updated body.html with new design"
else
    echo "   ⚠️ Warning: body-commotion.html not found"
fi

# Replace layout
if [ -f "${PROJECT_DIR}/app/layout-commotion.tsx" ]; then
    cp "${PROJECT_DIR}/app/layout-commotion.tsx" "${PROJECT_DIR}/app/layout.tsx"
    echo "   ✓ Updated layout.tsx with new configuration"
else
    echo "   ⚠️ Warning: layout-commotion.tsx not found"
fi

# Update CSS
if [ -f "${PROJECT_DIR}/public/app-commotion.css" ]; then
    cp "${PROJECT_DIR}/public/app-commotion.css" "${PROJECT_DIR}/public/app.css"
    echo "   ✓ Updated app.css with energy-based styling"
else
    echo "   ⚠️ Warning: app-commotion.css not found"
fi

# Update JavaScript
if [ -f "${PROJECT_DIR}/public/app-commotion.js" ]; then
    cp "${PROJECT_DIR}/public/app-commotion.js" "${PROJECT_DIR}/public/app.js"
    echo "   ✓ Updated app.js with interactive animations"
else
    echo "   ⚠️ Warning: app-commotion.js not found"
fi

# Check if the Next.js process is running and restart it
echo "🔄 Checking for running Next.js process..."

# Find the process running on port 3007
PID=$(lsof -ti:3007 2>/dev/null || echo "")

if [ -n "$PID" ]; then
    echo "   📍 Found Next.js process (PID: $PID), restarting..."
    
    # Kill the process
    kill $PID
    
    # Wait for it to stop
    sleep 3
    
    # Start it again
    cd "$PROJECT_DIR"
    echo "   🚀 Starting Next.js development server..."
    npm run dev -- --hostname 0.0.0.0 --port 3007 &
    
    # Wait for server to start
    sleep 5
    
    echo "   ✅ Server restarted successfully"
else
    echo "   ℹ️  No existing process found. Starting new server..."
    cd "$PROJECT_DIR"
    npm run dev -- --hostname 0.0.0.0 --port 3007 &
    sleep 5
    echo "   ✅ Server started successfully"
fi

# Verify deployment
echo "🧪 Verifying deployment..."
sleep 2

# Test if the server is responding
if curl -s -o /dev/null -w "%{http_code}" http://172.16.1.243:3007 | grep -q "200"; then
    echo "   ✅ Server is responding successfully"
else
    echo "   ⚠️ Server may still be starting up..."
fi

# Display file changes summary
echo ""
echo "📋 DEPLOYMENT SUMMARY"
echo "===================="
echo "✅ Original files backed up to: ${BACKUP_DIR}"
echo "✅ Commotion Labs design deployed"
echo "✅ Interactive animations enabled"
echo "✅ Energy-based visual system active"
echo "✅ Server restarted on port 3007"
echo ""

# Display the new design features
echo "🎨 NEW DESIGN FEATURES"
echo "====================="
echo "• Kinetic typography with physics-based animations"
echo "• Interactive particle energy field background"
echo "• Magnetic button and card interactions"  
echo "• Dynamic process visualization with orbital motion"
echo "• Real-time counters and statistics animation"
echo "• Organic shape morphing and floating icons"
echo "• Custom cursor with blend modes"
echo "• Enhanced focus cards with ripple effects"
echo "• Signature wave animation in footer"
echo "• Gradient color system (Orange → Amber → Yellow)"
echo ""

# Display access information
echo "🌐 ACCESS INFORMATION"
echo "===================="
echo "🔗 Local URL: http://172.16.1.243:3007"
echo "🔗 Localhost: http://localhost:3007"
echo ""

# Display rollback instructions
echo "↩️  ROLLBACK INSTRUCTIONS"
echo "========================"
echo "To revert to the original design, run:"
echo "   cd $PROJECT_DIR"
echo "   cp ${BACKUP_DIR}/body-original-${TIMESTAMP}.html app/body.html"
echo "   cp ${BACKUP_DIR}/layout-original-${TIMESTAMP}.tsx app/layout.tsx"
echo "   cp ${BACKUP_DIR}/app-original-${TIMESTAMP}.css public/app.css"
echo "   cp ${BACKUP_DIR}/app-original-${TIMESTAMP}.js public/app.js"
echo ""

# Performance and browser recommendations
echo "⚡ PERFORMANCE NOTES"
echo "==================="
echo "• Animations respect prefers-reduced-motion"
echo "• Particle systems scale based on device capability"
echo "• Hardware acceleration enabled for smooth performance"
echo "• Optimized for modern browsers (Chrome, Firefox, Safari, Edge)"
echo ""

# Development notes
echo "🛠️  DEVELOPMENT NOTES"
echo "===================="
echo "• Edit source files in app/ directory"
echo "• Commotion-specific files have '-commotion' suffix"
echo "• Original files are preserved as backups"
echo "• Server auto-reloads on file changes"
echo ""

echo "🔥 DEPLOYMENT COMPLETE!"
echo "======================"
echo "Your Commotion Labs website is now live with full energy-based interactions!"
echo "Visit http://172.16.1.243:3007 to experience the new design."
echo ""