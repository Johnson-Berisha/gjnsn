import Link from "next/link";

export default function Home() {
  return (
    <div className="container measure">
      <header>
        <div class="logo">Johnson Berisha</div>
        <nav>
          <Link href="#">Work</Link>
          <Link href="#">About</Link>
          <Link href="#">Notes</Link>
        </nav>
      </header>
      <section className="hero">
        <h1>Web developer crafting digital experiences with clarity and purpose.</h1>
        <p className="hero-sub">Currently based in Kosovo. Focusing on beautiful UI and interactive UX.</p>
      </section>
      <section>
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
      <footer>
        <span>&copy; 2026</span>
        <Link href={"#"}>Get in touch</Link>
      </footer>
    </div>
  );
}
