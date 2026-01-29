"use client";

import Link from "next/link";

export default function Home() {



  return (
    <div className="container measure">
      <header>
        <div className="logo">Johnson Berisha</div>
        <nav aria-label="Main navigation">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
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
        <section className="about" id="about">
          <div className="about-content">
            <h4 className="about-title">ABOUT</h4>
            <p>I believe that good design is as little design as possible. My approach is rooted in clarity, functionality, and timeless aesthetics.</p>
            <p>Over the last five years, I've partnered with startups and established brands to strip away the noise and focus on what truly matters to the user.</p>
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
            </div>
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
