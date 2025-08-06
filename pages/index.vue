<template>
    <div class="portfolio-container">
        <!-- Hero Section with Glassmorphism -->
        <div class="hero-section">
            <div class="glass-card main-card">
                <!-- Floating Profile Image -->
                <div class="profile-container">
                    <div class="profile-ring">
                        <div class="profile-image-wrapper">
                            <img src="../images/profile.jpeg" alt="Profile Picture" class="profile-image" />
                            <div class="profile-glow"></div>
                        </div>
                    </div>
                </div>

                <!-- Name and Title -->
                <div class="name-section">
                    <h1 class="main-title">
                        <span class="title-letter">P</span>
                        <span class="title-letter">H</span>
                        <span class="title-letter">A</span>
                        <span class="title-letter">T</span>
                        <span class="title-letter">T</span>
                        <span class="title-letter">Y</span>
                    </h1>
                    <div class="subtitle-wrapper">
                        <p class="subtitle">Fullstack Developer</p>
                        <div class="typing-animation">
                            <span class="typing-text">{{ currentText }}</span>
                            <span class="cursor" :class="{ blink: showCursor }">|</span>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="description-section">
                    <p class="description">
                        Hi! I'm Phat, a passionate developer who loves gaming, coding, and building innovative projects. 
                        Let's create something amazing together! 🚀
                    </p>
                </div>

                <!-- Social Links with Advanced Styling -->
                <div class="social-section">
                    <div class="social-grid">
                        <a href="https://www.facebook.com/profile.php?id=100008409944091" 
                           class="social-link facebook" target="_blank">
                            <div class="social-icon">
                                <i class="bi bi-facebook"></i>
                            </div>
                            <span class="social-label">Facebook</span>
                            <div class="social-ripple"></div>
                        </a>
                        
                        <a href="https://www.instagram.com/pat.stp" 
                           class="social-link instagram" target="_blank">
                            <div class="social-icon">
                                <i class="bi bi-instagram"></i>
                            </div>
                            <span class="social-label">Instagram</span>
                            <div class="social-ripple"></div>
                        </a>
                        
                        <a href="https://github.com/KoonPaT" 
                           class="social-link github" target="_blank">
                            <div class="social-icon">
                                <i class="bi bi-github"></i>
                            </div>
                            <span class="social-label">GitHub</span>
                            <div class="social-ripple"></div>
                        </a>
                        
                        <a href="https://steamcommunity.com/profiles/76561198977544675/" 
                           class="social-link steam" target="_blank">
                            <div class="social-icon">
                                <i class="bi bi-steam"></i>
                            </div>
                            <span class="social-label">Steam</span>
                            <div class="social-ripple"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Elements -->
        <div class="floating-elements">
            <div class="floating-shape shape-1"></div>
            <div class="floating-shape shape-2"></div>
            <div class="floating-shape shape-3"></div>
            <div class="floating-shape shape-4"></div>
        </div>
    </div>
</template>

<script setup>
const currentText = ref('Building Amazing Apps ✨')
const showCursor = ref(true)

// Simple client-side only animation
if (process.client) {
  const texts = [
      'Building Amazing Apps ✨',
      'Creating Digital Magic 🎨',
      'Coding the Future 🚀',
      'Gaming Enthusiast 🎮',
      'Problem Solver 💡'
  ]

  let textIndex = 0
  let charIndex = 0
  let isTyping = true

  const startTyping = () => {
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseTime = 2000
    
    const type = () => {
      const fullText = texts[textIndex]
      
      if (isTyping) {
        if (charIndex < fullText.length) {
          currentText.value = fullText.substring(0, charIndex + 1)
          charIndex++
          setTimeout(type, typeSpeed)
        } else {
          isTyping = false
          setTimeout(type, pauseTime)
        }
      } else {
        if (charIndex > 0) {
          currentText.value = fullText.substring(0, charIndex - 1)
          charIndex--
          setTimeout(type, deleteSpeed)
        } else {
          isTyping = true
          textIndex = (textIndex + 1) % texts.length
          setTimeout(type, typeSpeed)
        }
      }
    }
    
    type()
  }

  // Start typing animation after component mounts
  setTimeout(startTyping, 1000)
  
  // Cursor blink
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
}
</script>

<style scoped>
/* Portfolio Container */
.portfolio-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2rem;
    overflow: hidden;
}

/* Hero Section */
.hero-section {
    position: relative;
    z-index: 2;
}

/* Glassmorphism Card */
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 3rem 2rem;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    max-width: 500px;
    text-align: center;
    transform: translateY(50px);
    opacity: 0;
    animation: slideUp 1s ease 0.5s forwards;
    transition: all 0.3s ease;
}

.glass-card:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

@keyframes slideUp {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Profile Section */
.profile-container {
    margin-bottom: 2rem;
    position: relative;
}

.profile-ring {
    position: relative;
    display: inline-block;
    padding: 8px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffecd2);
    background-size: 300% 300%;
    animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.profile-image-wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    background: #000;
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
}

.profile-image:hover {
    transform: scale(1.1);
}

.profile-glow {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
    border-radius: 50%;
    opacity: 0;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
}

/* Name Section */
.name-section {
    margin-bottom: 2rem;
}

.main-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    line-height: 1;
}

.title-letter {
    display: inline-block;
    animation: bounceIn 0.8s ease;
    animation-fill-mode: both;
    color: transparent;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    background-clip: text;
    -webkit-background-clip: text;
}

.title-letter:nth-child(1) { animation-delay: 0.1s; }
.title-letter:nth-child(2) { animation-delay: 0.2s; }
.title-letter:nth-child(3) { animation-delay: 0.3s; }
.title-letter:nth-child(4) { animation-delay: 0.4s; }
.title-letter:nth-child(5) { animation-delay: 0.5s; }
.title-letter:nth-child(6) { animation-delay: 0.6s; }

@keyframes bounceIn {
    0% {
        transform: translateY(-100px) scale(0);
        opacity: 0;
    }
    50% {
        transform: translateY(0) scale(1.2);
        opacity: 1;
    }
    100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

.subtitle-wrapper {
    margin-top: 1rem;
}

.subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    font-weight: 300;
}

.typing-animation {
    margin-top: 0.5rem;
    height: 1.5rem;
}

.typing-text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
}

.cursor {
    color: #4ecdc4;
    font-weight: bold;
    animation: blink 1s infinite;
}

.cursor.blink {
    opacity: 1;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Description Section */
.description-section {
    margin-bottom: 2.5rem;
}

.description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
    font-weight: 300;
}

/* Social Section */
.social-section {
    margin-top: 2rem;
}

.social-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
}

.social-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    border-radius: 20px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    overflow: hidden;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:nth-child(1) { animation-delay: 0.7s; }
.social-link:nth-child(2) { animation-delay: 0.8s; }
.social-link:nth-child(3) { animation-delay: 0.9s; }
.social-link:nth-child(4) { animation-delay: 1s; }

@keyframes fadeInUp {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.social-link:hover {
    transform: translateY(-5px) scale(1.05);
    color: white;
}

.social-link.facebook:hover { background: linear-gradient(135deg, #1877f2, #42a5f5); }
.social-link.instagram:hover { background: linear-gradient(135deg, #e4405f, #fd1d1d, #fcb045); }
.social-link.github:hover { background: linear-gradient(135deg, #333, #666); }
.social-link.steam:hover { background: linear-gradient(135deg, #1b2838, #2a475e); }

.social-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
    transform: scale(1.2) rotate(5deg);
}

.social-label {
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0.9;
}

.social-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
}

.social-link:hover .social-ripple {
    width: 100px;
    height: 100px;
}

/* Floating Elements */
.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.floating-shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    animation: float 6s ease-in-out infinite;
}

.shape-1 {
    width: 80px;
    height: 80px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.shape-2 {
    width: 120px;
    height: 120px;
    top: 20%;
    right: 15%;
    animation-delay: -2s;
}

.shape-3 {
    width: 60px;
    height: 60px;
    bottom: 30%;
    left: 20%;
    animation-delay: -4s;
}

.shape-4 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    right: 10%;
    animation-delay: -1s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(10deg); }
    66% { transform: translateY(10px) rotate(-10deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .portfolio-container {
        padding: 1rem;
    }
    
    .glass-card {
        padding: 2rem 1.5rem;
        margin: 1rem;
    }
    
    .main-title {
        font-size: 2.5rem;
    }
    
    .profile-image-wrapper {
        width: 150px;
        height: 150px;
    }
    
    .social-grid {
        grid-template-columns: 1fr;
        max-width: 200px;
    }
}

@media (max-width: 480px) {
    .main-title {
        font-size: 2rem;
    }
    
    .profile-image-wrapper {
        width: 120px;
        height: 120px;
    }
}
</style>