import { useEffect, useState } from "react";

const disciplines = ["MEMORY", "BODY", "SOUND", "TECHNOLOGY", "CODE"];

const sections = [
  { number: "01", title: "WORK", type: "ARTISTIC PRACTICE", href: "#work" },
  { number: "02", title: "REAL-TIME SYSTEMS", type: "TOUCHDESIGNER / HYDRA", href: "#realtime" },
  { number: "03", title: "INTERACTIVE", type: "INSTALLATION / EXPERIENCE", href: "#interactive" },
  { number: "04", title: "RESEARCH", type: "PROCESS / ARCHIVE", href: "#research" },
];

const realtimeProjects = [
  { code: "HYDRA_001", title: "CHROMATIC BOTANICAL GLITCH", tools: "HYDRA / WEBGL / AUDIO", status: "LIVE" },
  { code: "HYDRA_002", title: "CAMERA FEEDBACK STUDY", tools: "HYDRA / CAMERA / FEEDBACK", status: "LAB" },
  { code: "TD_001", title: "MULTI-PROJECTOR STUDY", tools: "TOUCHDESIGNER / GLSL / 3D", status: "SYSTEM" },
];

export default function Home({ onOpenLiveSystems }) {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (event) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <main className="home" style={{ "--mx": `${pointer.x}%`, "--my": `${pointer.y}%` }}>
      <div className="cursor-glow" aria-hidden="true" />

      <header className="topbar">
        <a className="identity" href="#top">REY ÁNGELES</a>
        <nav className="topbar__nav" aria-label="Navegación principal">
          <a href="#work">WORK</a>
          <button className="nav-button" type="button" onClick={onOpenLiveSystems}>LIVE SYSTEMS</button>
          <a href="#about">ABOUT</a>
        </nav>
        <div className="topbar__meta">
          <span>MX</span><span>2026</span><span className="status"><i /> ONLINE</span>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__index">RA / ARCHIVE_002</div>
        <div className="hero__content">
          <p className="eyebrow">INTERDISCIPLINARY ARTIST</p>
          <h1 className="glitch-title" data-text="REY ÁNGELES">REY<br />ÁNGELES</h1>
          <p className="hero__role">CREATIVE TECHNOLOGIST<br />REAL-TIME VISUALS / INTERACTIVE MEDIA</p>
        </div>

        <button className="hero__signal hero__signal--button" type="button" onClick={onOpenLiveSystems} aria-label="Abrir Live Systems">
          <div className="signal-grid" />
          <span className="signal signal--one" />
          <span className="signal signal--two" />
          <span className="signal signal--three" />
          <div className="hero__cross">+</div>
          <span className="signal-label signal-label--a">INPUT_01</span>
          <span className="signal-label signal-label--b">REALTIME</span>
        </button>

        <div className="hero__footer">
          <div className="disciplines">{disciplines.map((item) => <span key={item}>{item}</span>)}</div>
          <span className="coordinates">SIGNAL / GENERATIVE / 01</span>
        </div>
      </section>

      <section className="statement" id="about">
        <span className="section-code">[ ABOUT / PRACTICE ]</span>
        <p>Mi práctica explora las relaciones entre <strong>memoria, cuerpo, sonido y tecnología</strong> mediante instalaciones, performance, medios audiovisuales y programación creativa.</p>
      </section>

      <section className="index" id="work">
        <div className="index__header"><span>INDEX</span><span>SELECTED AREAS</span></div>
        {sections.map((section) => section.number === "02" ? (
          <button className="index__item index__item--button" type="button" onClick={onOpenLiveSystems} key={section.number}>
            <span className="index__number">{section.number}</span>
            <span className="index__title">{section.title}</span>
            <span className="index__type">{section.type}</span>
            <span className="index__arrow">↗</span>
          </button>
        ) : (
          <a className="index__item" href={section.href} key={section.number}>
            <span className="index__number">{section.number}</span>
            <span className="index__title">{section.title}</span>
            <span className="index__type">{section.type}</span>
            <span className="index__arrow">↗</span>
          </a>
        ))}
      </section>

      <section className="realtime" id="realtime">
        <div className="realtime__intro">
          <span className="section-code">[ LAB / REAL-TIME SYSTEMS ]</span>
          <h2>LIVE IMAGE<br />AS A SYSTEM.</h2>
          <p>Registros de experimentos de imagen generativa, live coding y sistemas audiovisuales desarrollados en Hydra y TouchDesigner.</p>
        <button className="realtime__open" type="button" onClick={onOpenLiveSystems}>OPEN LIVE SYSTEMS <span>↗</span></button>
        </div>
        <div className="realtime__grid">
          {realtimeProjects.map((project, index) => (
            <article className="system-card" key={project.code}>
              <div className={`system-card__visual visual-${index + 1}`}><span>+ {project.status}</span></div>
              <div className="system-card__meta"><span>{project.code}</span><span>{project.tools}</span></div>
              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="placeholder-section" id="interactive"><span>[ INTERACTIVE ]</span><p>INSTALLATION / MUSEUM / SPACE / SENSOR</p></section>
      <section className="placeholder-section" id="research"><span>[ RESEARCH ]</span><p>PROCESS / NOTES / ARCHIVE / TEXT</p></section>

      <footer className="footer"><span>REY ÁNGELES © 2026</span><span>ART / TECHNOLOGY / LIVE SYSTEMS</span><span>ARCHIVE V2.0</span></footer>
    </main>
  );
}
