<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loader">
          <div class="loader-circle"></div>
        </div>
        <h2 class="loading-text">{{ loadingText }}</h2>
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="progress-text">{{ progress }}%</div>
        </div>
      </div>
      <div class="particles"></div>
    </div>
    
    <!-- Main Content -->
    <div v-show="!isLoading" class="main-content" :class="{ 'fade-in': !isLoading }">
      <AppNavbar />
      <main class="page-content">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(true)
const progress = ref(0)
const loadingText = ref('Loading')

// Client-side only loading animation
if (process.client) {
  const loadingDuration = 3000
  const interval = 50
  const increment = 100 / (loadingDuration / interval)
  
  // Loading text animation
  const loadingTexts = ['Loading', 'Loading.', 'Loading..', 'Loading...']
  let textIndex = 0
  
  const textInterval = setInterval(() => {
    loadingText.value = loadingTexts[textIndex % loadingTexts.length]
    textIndex++
  }, 500)
  
  const progressInterval = setInterval(() => {
    progress.value += increment
    
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(progressInterval)
      clearInterval(textInterval)
      
      // แสดง "Ready!" ก่อนปิด loading screen
      loadingText.value = 'Ready!'
      
      // เพิ่ม class สำหรับ ready animation
      setTimeout(() => {
        const loadingTextElement = document.querySelector('.loading-text')
        if (loadingTextElement) {
          loadingTextElement.classList.add('ready-state')
        }
      }, 100)
      
      setTimeout(() => {
        isLoading.value = false
      }, 800)
    }
  }, interval)
  
  // Create particles after DOM is ready
  setTimeout(() => {
    const particlesContainer = document.querySelector('.particles')
    if (!particlesContainer) return
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 3 + 's'
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's'
      particlesContainer.appendChild(particle)
    }
  }, 100)
} else {
  // For SSR, show loading screen initially
  isLoading.value = true
  loadingText.value = 'Loading'
}
</script>

<style>
/* Loading Screen Styles */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

.loading-content {
  text-align: center;
  color: white;
  z-index: 2;
}

.loader {
  margin-bottom: 2rem;
  position: relative;
}

.loader-circle {
  width: 80px;
  height: 80px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  letter-spacing: 3px;
  color: transparent;
  background: linear-gradient(45deg, #ffffff, #f0f0f0, #e0e0e0, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 200% 200%;
  animation: loadingTextGlow 2s ease-in-out infinite;
}

@keyframes loadingTextGlow {
  0%, 100% { 
    background-position: 0% 50%;
    transform: scale(1);
  }
  50% { 
    background-position: 100% 50%;
    transform: scale(1.05);
  }
}

.loading-text.ready-state {
  background: linear-gradient(45deg, #4ecdc4, #45b7d1, #96ceb4, #4ecdc4);
  background-size: 300% 300%;
  animation: readyGlow 0.8s ease-out, readyScale 0.8s ease-out;
}

@keyframes readyGlow {
  0% { 
    background-position: 0% 50%;
    filter: drop-shadow(0 0 10px rgba(78, 205, 196, 0.3));
  }
  50% {
    background-position: 50% 50%;
    filter: drop-shadow(0 0 20px rgba(78, 205, 196, 0.6));
  }
  100% { 
    background-position: 100% 50%;
    filter: drop-shadow(0 0 15px rgba(78, 205, 196, 0.4));
  }
}

@keyframes readyScale {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1.1); }
}

.progress-container {
  margin-top: 2rem;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #f0f0f0);
  border-radius: 10px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.progress-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

/* Particles Animation */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: float 3s linear infinite;
}

@keyframes float {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}

/* Main Content Fade In */
.main-content {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.main-content.fade-in {
  opacity: 1;
}

/* Page Content Spacing */
.page-content {
  padding-top: 70px;
}

/* Background Animation for Body */
body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  min-height: 100vh;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
