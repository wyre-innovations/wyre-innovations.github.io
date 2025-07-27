import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Wyre Innovations',
  description: 'Leading manufacturer of sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS solutions for clean energy storage.',
  
  // SEO and meta configuration
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    
    // SEO Keywords
    ['meta', { name: 'keywords', content: 'sine wave inverter, solar inverter, MPPT controller, Li-ion BMS, Wyre Innovations, battery management system, clean energy products, solar energy India, energy storage solutions' }],
    ['meta', { name: 'author', content: 'Wyre Innovations' }],
    
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Wyre Innovations - Clean Energy Solutions' }],
    ['meta', { property: 'og:description', content: 'Leading manufacturer of sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS solutions.' }],
    ['meta', { property: 'og:site_name', content: 'Wyre Innovations' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Wyre Innovations - Clean Energy Solutions' }],
    ['meta', { name: 'twitter:description', content: 'Leading manufacturer of sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS solutions.' }],
    
    // Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }],
    
    // Structured Data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Wyre Innovations",
      "description": "Leading manufacturer of sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS solutions for clean energy storage.",
      "url": "https://wyre-innovations.github.io",
      "logo": "https://wyre-innovations.github.io/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service"
      },
             "sameAs": [
         "https://github.com/Wyre-Innovations/",
         "https://www.crunchbase.com/organization/wyre-innovations"
       ]
    })]
  ],
  
  // Clean URLs
  cleanUrls: true,
  
  // Build configuration for GitHub Pages
  base: '/',
  outDir: './dist',
  
  // Theme configuration
  themeConfig: {
    logo: '',
    
            nav: [
          { text: 'Home', link: '/' },
          { text: 'Products', link: '/products' },
          { text: 'Contact Us', link: '/contact' }
        ],
    
    socialLinks: [],
    
    footer: {
      copyright: 'Copyright © 2025 Wyre Innovations. All rights reserved.'
    },
    
    // Search disabled
    // search: {
    //   provider: 'local'
    // }
  },
  
  // Custom CSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./styles/variables.scss";`
        }
      }
    }
  }
}) 