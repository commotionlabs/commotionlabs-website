# 🔥 Commotion Labs - Energy-Driven Website

> **We ignite commotion that creates lasting change**

An interactive, energy-driven website for Commotion Labs - a strategy, product, and venture studio. Built with Next.js and featuring cutting-edge animations, particle systems, and magnetic UI interactions.

## ✨ Live Demo

**🌐 https://commotionlabs.github.io/commotionlabs-website/**

## 🚀 Features

### Interactive Design System
- **Kinetic Typography**: Physics-based letter animations with explode, orbit, wave, and magnetize effects
- **Energy Field Background**: Real-time particle system with mouse interaction (50+ particles)
- **Magnetic Interactions**: UI elements that attract/repel based on cursor proximity
- **Dynamic Process Visualization**: Orbital animations showing Think → Strategize → Act methodology

### Visual Experience
- **Custom Cursor**: Blend-mode cursor that responds to interactive elements
- **Ripple Effects**: Touch-responsive feedback on cards and buttons
- **Organic Shape Morphing**: SVG animations with floating technical icons
- **Signature Wave Footer**: Mathematical sine wave with continuous motion
- **Gradient Color System**: Orange (#FF6B35) → Amber (#F7931E) → Yellow (#FFD23F)

### Performance & Accessibility
- **60fps Hardware Acceleration**: GPU-optimized transforms and animations
- **Reduced Motion Support**: Respects `prefers-reduced-motion` accessibility settings
- **Device-Responsive Particles**: Particle count scales with device capability  
- **Mobile Optimized**: Touch-friendly interactions with battery-conscious animation

## 🛠️ Technical Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: CSS Custom Properties with advanced animations
- **Interactivity**: Canvas API for particle systems, Intersection Observer for scroll effects
- **Performance**: RequestAnimationFrame loops, hardware acceleration, memory management
- **Deployment**: GitHub Pages with automated CI/CD

## 🏗️ Project Structure

```
├── app/
│   ├── body.html              # Main HTML structure with energy elements
│   ├── layout.tsx             # Next.js layout with metadata & performance config
│   └── page.tsx               # Root page component
├── public/
│   ├── app.css                # Complete animation system (28KB)
│   ├── app.js                 # Interactive behaviors & physics (24KB)
│   └── icons/                 # Favicon and brand assets
├── .github/workflows/
│   └── deploy.yml             # Automated GitHub Pages deployment  
├── COMMOTION_DESIGN.md        # Complete design system documentation
└── next.config.js             # Static export configuration
```

## 🎯 Brand Positioning

### Core Services
- **Strategic Clarity**: Workshops that cut through noise → confident execution
- **Product Excellence**: 0→1 products + platform scale with user obsession  
- **Venture Creation**: Co-founding partnerships with hands-on expertise

### Values
- **Energy First**: Create momentum, not bureaucracy
- **Systems Thinking**: See connections others miss, elegant solutions
- **Atomic Impact**: Small changes in right places = exponential results

## 🚀 Local Development

```bash
# Clone repository
git clone https://github.com/commotionlabs/commotionlabs-website.git
cd commotionlabs-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Visit `http://localhost:3000` to see the energy system in action.

## 📱 Responsive Breakpoints

- **Desktop (1024px+)**: Full particle systems and complex animations
- **Tablet (768-1023px)**: Reduced particle count, maintained interactions
- **Mobile (320-767px)**: Essential animations, touch-optimized
- **Accessibility**: Motion disabled when `prefers-reduced-motion: reduce`

## ⚡ Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s  
- **Total Blocking Time**: < 300ms
- **Animation Frame Rate**: 60fps maintained
- **Memory Usage**: < 50MB for full experience

## 🎨 Design Philosophy

**Energy as a Design Language**: Every interaction generates visual momentum. Kinetic typography, particle physics, and magnetic fields create an experience that embodies "commotion" - productive chaos that leads to breakthrough results.

**Technical Sophistication**: Advanced animation systems built with performance-first principles. Canvas rendering, GPU acceleration, and smart memory management deliver premium agency-level polish.

**Authentic Brand Expression**: Visual metaphors directly support the strategic positioning. Energy fields represent idea generation, orbital motions show systematic processes, magnetic interactions demonstrate attraction of right opportunities.

## 📈 Analytics Integration

Track these key interactions for optimization:
- Kinetic typography engagement time
- Magnetic button hover rates  
- Process visualization scroll depth
- Case study navigation patterns
- CTA conversion on energy buttons

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-energy`)
3. Commit changes (`git commit -m '✨ Add amazing energy feature'`)
4. Push branch (`git push origin feature/amazing-energy`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Site**: https://commotionlabs.github.io/commotionlabs-website/
- **Repository**: https://github.com/commotionlabs/commotionlabs-website
- **Documentation**: [COMMOTION_DESIGN.md](COMMOTION_DESIGN.md)
- **Contact**: hello@commotionlabs.com

---

**Built with energy by Commotion Labs** ⚡  
*Where strategy meets product meets venture creation*