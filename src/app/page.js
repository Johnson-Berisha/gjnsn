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
        <h1>Web Developer crafting digital experiences with clarity and purpose.</h1>
        <p className="hero-sub">Currently based in Kosovo. Focusing on beautiful UI and UX.</p>
      </section>
    </div>
  );
}
