"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsRobot, BsServer, BsCodeSquare, BsPalette } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";

function TypingText() {
  const texts = useMemo(
    () => [
      "Building Amazing Apps",
      "Creating Digital Magic",
      "Coding the Future",
      "Gaming Enthusiast",
      "Problem Solver",
    ],
    []
  );
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    const full = texts[textIndex];
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 1200;

    let t: NodeJS.Timeout;
    if (isTyping) {
      if (charIndex < full.length) {
        t = setTimeout(() => setCharIndex((i) => i + 1), typeSpeed);
      } else {
        t = setTimeout(() => setIsTyping(false), pauseTime);
      }
    } else {
      if (charIndex > 0) {
        t = setTimeout(() => setCharIndex((i) => i - 1), deleteSpeed);
      } else {
        setIsTyping(true);
        setTextIndex((i) => (i + 1) % texts.length);
      }
    }
    return () => clearTimeout(t);
  }, [charIndex, isTyping, textIndex, texts]);

  return (
    <span className="inline-flex items-center gap-1 text-base sm:text-lg text-foreground/80">
      <span>{texts[textIndex].slice(0, charIndex)}</span>
      <span className={`ml-0.5 w-[1px] h-[1.2em] bg-foreground ${showCursor ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
}

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.15),transparent_60%)]">
      {/* Floating background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="float-anim absolute left-[8%] top-[12%] h-20 w-20 rounded-full bg-white/10" />
        <div className="float-anim absolute right-[12%] top-[18%] h-28 w-28 rounded-full bg-white/10 [animation-delay:-2s]" />
        <div className="float-anim absolute left-[18%] bottom-[30%] h-16 w-16 rounded-full bg-white/10 [animation-delay:-4s]" />
        <div className="float-anim absolute right-[8%] bottom-[22%] h-24 w-24 rounded-full bg-white/10 [animation-delay:-1s]" />
      </div>

      <main className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-10 sm:py-16">
        {/* Profile + status */}
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/30 to-pink-400/30 blur-2xl" />
            <div className="relative grid place-items-center rounded-full border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur-sm">
              <div className="rounded-full border border-white/10 bg-black/20 p-1">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  priority
                  className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
                />
              </div>
            </div>
          </div>
          <div className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 shadow-sm">
            Available for Work
          </div>
        </div>

        {/* Title + typing */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-4xl font-extrabold tracking-[0.2em] sm:text-5xl bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            <span className="inline-block">P</span>
            <span className="inline-block">H</span>
            <span className="inline-block">A</span>
            <span className="inline-block">T</span>
            <span className="inline-block">T</span>
            <span className="inline-block">Y</span>
          </h1>
          <p className="text-sm text-foreground/70">Fullstack Developer & Tech Innovator</p>
          <TypingText />
        </div>

        {/* Description + tech stack */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base text-foreground/80">
            Passionate developer specializing in modern web technologies and innovative solutions. I create robust
            applications that blend cutting-edge technology with exceptional user experience.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            {["Vue.js", "React", "Node.js", "Python", "AI/ML"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-foreground/80 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/KoonPaT"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-5 py-2.5 text-white shadow hover:opacity-95 ring-1 ring-white/20"
          >
            <BsCodeSquare /> <span>View My Work</span>
          </a>
          <a
            href="https://checker.phatty.in.th/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-2.5 text-foreground shadow hover:bg-white/15"
          >
            <BsRobot /> <span>Try AI Checker</span>
          </a>
        </div>

        {/* Social links */}
        <div className="w-full">
          <div className="mx-auto grid max-w-md grid-cols-2 gap-3 sm:max-w-lg sm:grid-cols-4">
            <a
              href="https://www.facebook.com/profile.php?id=100008409944091"
              target="_blank"
              className="social-tile social-facebook group"
            >
              <div className="social-icon"><BsFacebook /></div>
              <span className="social-label">Facebook</span>
            </a>
            <a href="https://www.instagram.com/p07t_y/" target="_blank" className="social-tile social-instagram group">
              <div className="social-icon"><BsInstagram /></div>
              <span className="social-label">Instagram</span>
            </a>
            <a href="https://github.com/KoonPaT" target="_blank" className="social-tile social-github group">
              <div className="social-icon"><BsGithub /></div>
              <span className="social-label">GitHub</span>
            </a>
            <a href="https://steamcommunity.com/id/koonpatty/" target="_blank" className="social-tile social-steam group">
              <div className="social-icon"><FaSteam /></div>
              <span className="social-label">Steam</span>
            </a>
          </div>
        </div>

        {/* Skills */}
        <section id="skills" className="w-full">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md">
            <h3 className="mb-4 text-center text-2xl font-semibold bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent">Core Expertise</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-lg"><BsCodeSquare /></div>
                <div>
                  <h4 className="text-base font-medium">Frontend Development</h4>
                  <p className="text-sm text-foreground/70">Modern JavaScript frameworks and responsive design</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-lg"><BsServer /></div>
                <div>
                  <h4 className="text-base font-medium">Backend Development</h4>
                  <p className="text-sm text-foreground/70">Server architecture and API development</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-lg"><BsRobot /></div>
                <div>
                  <h4 className="text-base font-medium">AI/ML Integration</h4>
                  <p className="text-sm text-foreground/70">Intelligent applications and automation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-lg"><BsPalette /></div>
                <div>
                  <h4 className="text-base font-medium">UI/UX Design</h4>
                  <p className="text-sm text-foreground/70">User-centered design and interface optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
