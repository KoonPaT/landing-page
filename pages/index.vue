<template>
    <div class="portfolio-container" id="home">
        <!-- Hero Section with Enhanced Professional Design -->
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
                    <div class="status-indicator">
                        <div class="status-dot"></div>
                        <span class="status-text">Available for Work</span>
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
                        <p class="subtitle">Fullstack Developer & Tech Innovator</p>
                        <div class="typing-animation">
                            <span class="typing-text">{{ currentText }}</span>
                            <span class="cursor" :class="{ blink: showCursor }">|</span>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Description -->
                <div class="description-section">
                    <p class="description">
                        Passionate developer specializing in modern web technologies and innovative solutions. 
                        I create robust applications that blend cutting-edge technology with exceptional user experience.
                    </p>
                    <div class="tech-stack">
                        <div class="tech-item">Vue.js</div>
                        <div class="tech-item">React</div>
                        <div class="tech-item">Node.js</div>
                        <div class="tech-item">Python</div>
                        <div class="tech-item">AI/ML</div>
                    </div>
                </div>

                <!-- Professional CTA Button -->
                <div class="cta-section">
                    <a href="https://github.com/KoonPaT" target="_blank" class="cta-button primary">
                        <i class="bi bi-code-slash"></i>
                        <span>View My Work</span>
                    </a>
                    <a href="https://checker.phatty.in.th/" target="_blank" class="cta-button secondary">
                        <i class="bi bi-robot"></i>
                        <span>Try AI Checker</span>
                    </a>
                </div>

                <!-- Enhanced Social Links -->
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

        <!-- Professional Skills Section -->
        <div class="skills-section">
            <div class="skills-card glass-effect">
                <h3 class="skills-title">Core Expertise</h3>
                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="bi bi-code-square"></i>
                        </div>
                        <div class="skill-info">
                            <h4>Frontend Development</h4>
                            <p>Modern JavaScript frameworks and responsive design</p>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="bi bi-server"></i>
                        </div>
                        <div class="skill-info">
                            <h4>Backend Development</h4>
                            <p>Server architecture and API development</p>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="bi bi-robot"></i>
                        </div>
                        <div class="skill-info">
                            <h4>AI/ML Integration</h4>
                            <p>Intelligent applications and automation</p>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="bi bi-palette"></i>
                        </div>
                        <div class="skill-info">
                            <h4>UI/UX Design</h4>
                            <p>User-centered design and interface optimization</p>
                        </div>
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
            <div class="floating-shape shape-5"></div>
            <div class="floating-shape shape-6"></div>
        </div>

        <!-- Professional Background Pattern -->
        <div class="background-pattern"></div>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2rem;
    overflow: hidden;
    gap: 3rem;
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

/* Status Indicator */
.status-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.status-dot {
    width: 8px;
    height: 8px;
    background: #4ecdc4;
    border-radius: 50%;
    animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.2); }
}

.status-text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.5px;
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
    margin: 0 0 1.5rem 0;
    font-weight: 300;
}

/* Tech Stack */
.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
}

.tech-item {
    padding: 0.4rem 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    transition: all 0.3s ease;
}

.tech-item:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

/* CTA Section */
.cta-section {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
    flex-wrap: wrap;
}

.cta-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.cta-button.primary {
    background: linear-gradient(135deg, #4ecdc4, #44a08d);
    color: white;
    box-shadow: 0 4px 20px rgba(78, 205, 196, 0.3);
}

.cta-button.primary:hover {
    background: linear-gradient(135deg, #44a08d, #4ecdc4);
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(78, 205, 196, 0.4);
    color: white;
}

.cta-button.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
    color: white;
}

/* Skills Section */
.skills-section {
    width: 100%;
    max-width: 900px;
    margin: 2rem 0;
    position: relative;
    z-index: 2;
}

.skills-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(25px);
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 2.5rem 2rem;
    box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(30px);
    opacity: 0;
    animation: slideUpFade 1s ease 1.5s forwards;
}

@keyframes slideUpFade {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.skills-title {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: transparent;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    background-clip: text;
    -webkit-background-clip: text;
    margin-bottom: 2rem;
    position: relative;
}

.skills-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 2px;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(15px);
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
    transform: translateY(20px);
    opacity: 0;
    animation: skillFadeIn 0.8s ease forwards;
}

.skill-item:nth-child(1) { animation-delay: 1.8s; }
.skill-item:nth-child(2) { animation-delay: 2s; }
.skill-item:nth-child(3) { animation-delay: 2.2s; }
.skill-item:nth-child(4) { animation-delay: 2.4s; }

@keyframes skillFadeIn {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.skill-item:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.skill-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(78, 205, 196, 0.2));
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #4ecdc4;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.skill-item:hover .skill-icon {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.3), rgba(78, 205, 196, 0.3));
    border-color: rgba(255, 255, 255, 0.4);
    transform: rotate(5deg) scale(1.1);
}

.skill-info h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.95);
    margin: 0 0 0.4rem 0;
}

.skill-info p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    line-height: 1.4;
}

/* Background Pattern */
.background-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.03;
    background-image: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
    background-size: 50px 50px;
    background-position: 0 0, 25px 25px;
    z-index: 0;
    animation: patternMove 20s linear infinite;
}

@keyframes patternMove {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(50px) translateY(50px); }
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

.shape-5 {
    width: 90px;
    height: 90px;
    top: 60%;
    left: 5%;
    animation-delay: -3s;
    background: linear-gradient(45deg, rgba(69, 183, 209, 0.1), rgba(255, 107, 107, 0.05));
}

.shape-6 {
    width: 70px;
    height: 70px;
    top: 40%;
    right: 5%;
    animation-delay: -5s;
    background: linear-gradient(45deg, rgba(78, 205, 196, 0.1), rgba(69, 183, 209, 0.05));
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
    
    .cta-section {
        flex-direction: column;
        align-items: center;
    }
    
    .cta-button {
        width: 100%;
        max-width: 200px;
        justify-content: center;
    }
    
    .tech-stack {
        gap: 0.4rem;
    }
    
    .tech-item {
        font-size: 0.75rem;
        padding: 0.3rem 0.6rem;
    }
    
    .skills-section {
        margin: 1.5rem 0;
    }
    
    .skills-card {
        padding: 2rem 1.5rem;
        margin: 0 1rem;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .skill-item {
        padding: 1.2rem;
        gap: 1rem;
    }
    
    .skill-icon {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
    }
    
    .skills-title {
        font-size: 1.5rem;
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
    
    .description {
        font-size: 1rem;
    }
    
    .status-indicator {
        padding: 0.4rem 0.8rem;
    }
    
    .status-text {
        font-size: 0.75rem;
    }
    
    .skills-card {
        padding: 1.5rem 1rem;
        margin: 0 0.5rem;
    }
    
    .skills-title {
        font-size: 1.3rem;
    }
    
    .skill-item {
        padding: 1rem;
        gap: 0.8rem;
        flex-direction: column;
        text-align: center;
    }
    
    .skill-icon {
        width: 45px;
        height: 45px;
        font-size: 1.1rem;
    }
    
    .skill-info h4 {
        font-size: 1rem;
    }
    
    .skill-info p {
        font-size: 0.85rem;
    }
}
</style>