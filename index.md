---
layout: home
title: Wyre Innovations
description: Leading manufacturer of clean energy solutions including sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS systems.

hero:
  name: false
  text: false
  tagline: false
  actions: false

features: false
---

<div class="wyre-hero">
  <div class="wyre-brand">
    WYRE
  </div>
</div>

<style scoped>
/* Fullscreen fixed hero behind header/footer */
.wyre-hero {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  z-index: -1; /* Push it truly behind all UI */
  pointer-events: none; /* Allow clicks to pass through */
  overflow: hidden;
}

/* Big centered text */
.wyre-brand {
  font-family: 'Lovelo', 'Inter', sans-serif;
  font-size: clamp(4rem, 15vw, 12rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--vp-c-text-1);
  user-select: none;
  text-align: center;
  line-height: 1;
  position: relative;
  pointer-events: auto; /* Allow hover effects on the brand text */
}

/* Optional shimmer effect */
.wyre-brand::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 2s ease;
}

.wyre-brand:hover::before {
  left: 100%;
}

/* Dark mode adjustments */
.dark .wyre-brand::before {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
}

/* Prevent scrollbars on home but allow mobile navigation */
:global(body:has(.Layout.VPHome)) {
  overflow-x: hidden !important;
  overflow-y: auto !important;
  height: 100vh;
}

:global(.Layout.VPHome .VPContent) {
  height: 100vh;
  overflow: visible !important; /* Allow mobile menu to show */
  padding: 0;
}

/* Ensure navigation is always accessible */
:global(.VPNav) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 10 !important;
}
</style> 