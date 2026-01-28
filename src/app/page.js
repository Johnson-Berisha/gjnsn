"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const blobRef = useRef(null);
  const projectListRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const offset = 150; // half of blob size (50px)
    const moveBlob = (e) => {
      blob.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
    };

    const projectList = projectListRef.current;
    const handleProjectListHover = () => {
      blob.style.opacity = "0";
    };
    const handleProjectListLeave = () => {
      blob.style.opacity = "0.4";
    };

    window.addEventListener("mousemove", moveBlob);
    projectList?.addEventListener("mouseenter", handleProjectListHover);
    projectList?.addEventListener("mouseleave", handleProjectListLeave);

    return () => {
      window.removeEventListener("mousemove", moveBlob);
      projectList?.removeEventListener("mouseenter", handleProjectListHover);
      projectList?.removeEventListener("mouseleave", handleProjectListLeave);
    };
  }, []);

  return (
    <div className="container measure">
      <div className="blob" ref={blobRef} />
      <header>
        <div className="logo">Johnson Berisha</div>
        <nav aria-label="Main navigation">
          <Link href="#">Work</Link>
          <Link href="#">About</Link>
          <Link href="#">Notes</Link>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Web developer crafting digital experiences with clarity and purpose.</h1>
          <p className="hero-sub">Currently based in Kosovo. Focusing on beautiful UI and interactive UX.</p>
        </section>
        <section className="projects">
          <h2 className="visuallyHidden">Projects</h2>
          <div className="project-list" ref={projectListRef}>
            <a href="#" className="project-item">
              <span className="project-title">Fontiq</span>
              <div className="project-meta">
                <span>Founder</span>
                <span>2026</span>
              </div>
            </a>
            <a href="#" className="project-item">
              <span className="project-title">MPDPlayer</span>
              <div className="project-meta">
                <span>Development</span>
                <span>2025</span>
              </div>
            </a>
            <a href="#" className="project-item">
              <span className="project-title">Berisha AL</span>
              <div className="project-meta">
                <span>Website</span>
                <span>2023</span>
              </div>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>&copy; 2026</span>
        <Link href={"#"}>Get in touch</Link>
      </footer>
    </div>
  );
}
