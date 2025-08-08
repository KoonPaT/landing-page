<template>
  <nav class="custom-navbar">
    <div class="container-fluid">
      <div class="navbar-content">
        <!-- Brand/Logo -->
        <div class="navbar-brand">
          <span class="brand-text">PHATTY</span>
          <div class="brand-subtitle">Developer</div>
        </div>

        <!-- Navigation Links -->
        <div class="navbar-nav" :class="{ active: isMenuOpen }">
          <a href="#home" class="nav-link" @click="closeMenu">
            <i class="bi bi-house-door"></i>
            <span>Home</span>
          </a>
          
          <a href="https://checker.phatty.in.th/" class="nav-link external" target="_blank" @click="closeMenu">
            <i class="bi bi-shield-check"></i>
            <span>AI Text Checker</span>
            <i class="bi bi-box-arrow-up-right external-icon"></i>
          </a>
          
          <a href="#" class="nav-link external coming-soon" @click.prevent="closeMenu">
            <i class="bi bi-link-45deg"></i>
            <span>Link Shortener</span>
            <span class="coming-soon-badge">Soon</span>
          </a>
          
          <a href="https://github.com/KoonPaT" class="nav-link external" target="_blank" @click="closeMenu">
            <i class="bi bi-github"></i>
            <span>GitHub</span>
            <i class="bi bi-box-arrow-up-right external-icon"></i>
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="navbar-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Close menu on outside click
if (process.client) {
  const handleClickOutside = (e) => {
    if (!e.target.closest('.custom-navbar')) {
      isMenuOpen.value = false
    }
  }
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
}
</script>

<style scoped>
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  box-shadow: 
    0 2px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.custom-navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 107, 107, 0.05) 0%, 
    rgba(78, 205, 196, 0.04) 25%,
    rgba(69, 183, 209, 0.05) 50%,
    rgba(150, 206, 180, 0.03) 75%,
    rgba(255, 236, 210, 0.04) 100%);
  background-size: 200% 200%;
  animation: navbarGradient 6s ease infinite;
  z-index: -1;
}

@keyframes navbarGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.custom-navbar:hover {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 
    0 4px 25px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.navbar-brand::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.08), 
    transparent);
  transition: left 0.6s ease;
}

.navbar-brand:hover::before {
  left: 100%;
}

.navbar-brand:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-1px);
}

.brand-text {
  font-size: 1.3rem;
  font-weight: 900;
  color: transparent;
  background: linear-gradient(45deg, 
    #ff6b6b 0%, 
    #4ecdc4 25%, 
    #45b7d1 50%, 
    #96ceb4 75%, 
    #ffecd2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 200% 200%;
  letter-spacing: 1px;
  animation: brandGradient 3s ease infinite;
  transition: all 0.3s ease;
}

.brand-text:hover {
  transform: scale(1.02);
}


@keyframes brandGradient {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 50% 0%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 50% 100%; }
}

.brand-subtitle {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-top: -2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.navbar-brand:hover .brand-subtitle {
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1.5px;
}

.brand-subtitle {
  transition: all 0.3s ease;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: static;
  flex-direction: row;
  opacity: 1;
  visibility: visible;
  background: transparent;
  transform: none;
  max-height: none;
  overflow: visible;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.8rem;
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(78, 205, 196, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.nav-link.external:hover {
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(69, 183, 209, 0.15);
}

.nav-link i {
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.nav-link:hover i {
  transform: scale(1.05);
}

.external-icon {
  font-size: 0.75rem;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.nav-link:hover .external-icon {
  opacity: 0.9;
  transform: translate(2px, -2px);
}

.coming-soon {
  opacity: 0.75;
  cursor: not-allowed;
  position: relative;
}

.coming-soon:hover {
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
}

.coming-soon-badge {
  background: linear-gradient(135deg, 
    #ff6b6b 0%, 
    #ff8e53 50%, 
    #ffa500 100%);
  color: white;
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
  font-weight: 600;
  margin-left: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  box-shadow: 0 1px 4px rgba(255, 107, 107, 0.2);
}

@keyframes comingSoonGlow {
  from { box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3); }
  to { box-shadow: 0 4px 15px rgba(255, 107, 107, 0.5); }
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  gap: 4px;
  z-index: 1001;
  transition: all 0.3s ease;
}

.navbar-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.navbar-toggle span {
  width: 20px;
  height: 2px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.navbar-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.navbar-toggle.active span:nth-child(2) {
  opacity: 0;
}

.navbar-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0.5rem;
    background: rgba(15, 20, 35, 0.96);
    backdrop-filter: blur(25px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    transform: translateY(-110%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: 0;
    overflow: hidden;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .navbar-nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 0.05) 0%, 
      rgba(78, 205, 196, 0.03) 50%,
      rgba(255, 107, 107, 0.04) 100%);
    z-index: -1;
  }

  .navbar-nav.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    max-height: 400px;
  }

  .nav-link {
    padding: 1rem 1.5rem;
    margin: 0.25rem 0;
    justify-content: flex-start;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(8px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

/* Desktop Styles - Hide toggle button on desktop */
@media (min-width: 769px) {
  .navbar-toggle {
    display: none !important;
  }

  .navbar-nav {
    position: static !important;
    flex-direction: row !important;
    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
    background: transparent !important;
    backdrop-filter: none !important;
    border: none !important;
    padding: 0 !important;
    max-height: none !important;
    overflow: visible !important;
  }
}

@media (max-width: 576px) {
  .navbar-content {
    padding: 0 0.75rem;
  }

  .brand-text {
    font-size: 1.3rem;
  }

  .nav-link {
    font-size: 0.95rem;
  }
}
</style>