"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    { id: 'fontiq', title: 'Fontiq', role: 'Founder', year: '2026', description: 'A type-focused project I founded to explore variable fonts and web typography.' },
    { id: 'mpdplayer', title: 'MPDPlayer', role: 'Development', year: '2025', description: 'A lightweight music player frontend for MPD with a focus on responsive UI.' },
    { id: 'berisha', title: 'Berisha AL', role: 'Website', year: '2023', description: 'A portfolio and informational website built with modern CSS and accessible markup.' }
  ];

  function openModal(project) {
    setActiveProject(project);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setActiveProject(null);
  }

  useEffect(() => {
    if (!modalOpen) return;
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  return (
    <div className="container measure">
      <header>
        <div className="logo">Johnson Berisha</div>
        <nav aria-label="Main navigation">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Web developer crafting digital experiences with clarity and purpose.</h1>
            <p className="hero-sub">Currently based in Kosovo. Focusing on beautiful UI and interactive UX.</p>
          </div>
          <div className="blob" />

        </section>
        <section className="projects" id="work">
          <h2 className="visuallyHidden">Projects</h2>
          <div className="project-list">
            {projects.map((p) => (
              <a
                href="#"
                key={p.id}
                className="project-item"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(p);
                }}
              >
                <span className="project-title">{p.title}</span>
                <div className="project-meta">
                  <span>{p.role}</span>
                  <span>{p.year}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
              <h3 id="modal-title">{activeProject?.title}</h3>
              <div className="project-meta">
                <span>{activeProject?.role}</span>
                <span>{activeProject?.year}</span>
              </div>
              <p>{activeProject?.description}</p>
            </div>
          </div>
        )}
        <section className="about" id="about">
          <div className="about-content">
            <h4 className="about-title">ABOUT</h4>
            <p>Creative web developer focused on modern CSS, responsive design, and clean, high-performance user interfaces. Passionate about building fast, polished websites and constantly improving my craft.</p>
            <h4 className="about-title">PHILOSOPHY</h4>
            <p>I believe that good design is as little design as possible. My approach is rooted in clarity, functionality, and timeless aesthetics.</p>
          </div>
          <div className="about-service">
            <h4 className="about-title">SERVICES</h4>
            <p>UI/UX Design, Creative Direction, Rapid Prototyping, Frontend Development.</p>
            <h4 className="about-title">SKILLS</h4>
            <div className="languages">
              <span className="language">HTML</span>
              <span className="language">CSS</span>
              <span className="language">JAVASCRIPT</span>
              <span className="language">NEXTJS</span>
              <span className="language">Figma</span>
              <span className="language">GSAP</span>
              <span className="language">LenisJS</span>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <h2 className="contact-title">LET'S WORK TOGETHER</h2>
          <p className="contact-sub">I'm currently available for freelance projects and collaborations. Feel free to reach out!</p>
          <span className="language">gjonsonberisha@gmail.com</span>
          <span className="language">048 711 544</span>
        </section>
      </main>
      <footer>
        <span>&copy; 2026</span>
        <Link href={"#contact"}>Get in touch</Link>
      </footer>
    </div>
  );
}
