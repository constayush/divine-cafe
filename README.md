# Divine Brew - Premium Coffee Café Website

A modern, responsive React website for Divine Brew coffee café featuring smooth animations, dark/light theme toggle, and beautiful design.

## 🚀 Features

- **5 Complete Pages**: Home, About, Menu, Gallery, Contact
- **Dark/Light Theme**: Smooth theme switching with system preference detection
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Professional Images**: High-quality Unsplash coffee shop images
- **WhatsApp Integration**: Direct booking through WhatsApp
- **Contact Forms**: Functional contact form with validation
- **Image Gallery**: Interactive lightbox gallery
- **Menu Filtering**: Category-based menu filtering
- **Smooth Scrolling**: Enhanced navigation experience
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized images and lazy loading

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible UI components

## 📦 Installation

1. **Clone or download the project**
2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
3. **Start development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
4. **Open browser:** http://localhost:5173

## 🏗️ Build for Production

\`\`\`bash
npm run build
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── ui/             # UI components (Button, Card, etc.)
│   ├── ThemeToggle.tsx # Theme switching component
│   ├── ScrollToTopButton.tsx
│   └── ...
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── hooks/              # Custom hooks
│   └── useScrollToTop.ts
├── lib/                # Utilities
│   └── utils.ts
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Menu.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
\`\`\`

## 🎨 Customization

### Colors & Branding
- Edit `tailwind.config.js` for color scheme
- Update `src/index.css` for custom styles
- Replace logo and brand name in components

### Content
- **Home Page**: Edit `src/pages/Home.tsx`
- **About Page**: Edit `src/pages/About.tsx`
- **Menu Items**: Update menu array in `src/pages/Menu.tsx`
- **Gallery Images**: Replace image URLs in `src/pages/Gallery.tsx`
- **Contact Info**: Update contact details in `src/pages/Contact.tsx`

### WhatsApp Integration
- Update phone number in WhatsApp booking functions
- Customize booking messages

### Images
- Replace Unsplash URLs with your own images
- Optimize images for web (WebP format recommended)
- Update alt text for accessibility

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
- Build: `npm run build`
- Upload `dist` folder contents
- Configure server for SPA routing

## 📱 Mobile Optimization

- Responsive design works on all screen sizes
- Touch-friendly navigation and buttons
- Optimized images for mobile bandwidth
- Fast loading with code splitting

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast color ratios
- Focus indicators

## 🔧 Environment Variables

Create `.env` file for customization:
\`\`\`env
VITE_WHATSAPP_NUMBER=1234567890
VITE_BUSINESS_EMAIL=hello@divinebrew.com
VITE_BUSINESS_ADDRESS=123 Divine Street
\`\`\`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For support or customization requests, please contact the development team.

---

**Divine Brew** - Where every cup is a sacred experience ☕✨
\`\`\`

## 🎉 **Complete Pure React Project Ready!**

Your Divine Brew website is now a **complete pure React + TypeScript project** with:

### ✅ **What You Get:**
- **Pure React 18** - No Next.js dependencies
- **TypeScript** - Full type safety
- **Vite** - Lightning fast development
- **All 5 Pages** - Home, About, Menu, Gallery, Contact
- **Smooth Scrolling** - Enhanced navigation
- **Theme Toggle** - Dark/light mode
- **WhatsApp Integration** - Direct booking
- **Professional Images** - Unsplash coffee photos
- **Responsive Design** - Works on all devices
- **Complete Documentation** - Setup and customization guide

### 📥 **How to Download:**
1. **Click "Download Code"** button at top-right
2. **Extract ZIP file**
3. **Run commands:**
   \`\`\`bash
   npm install
   npm run dev
   \`\`\`
4. **Open:** http://localhost:5173

**Your pure React Divine Brew website is ready to customize and deploy! ☕✨**
