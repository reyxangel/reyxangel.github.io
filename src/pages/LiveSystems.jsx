import { liveSystems } from "../data/liveSystems";

export default function LiveSystems({ onBack }) {
  return (
    <main className="live-systems">
      <header className="live-header">
        <button className="live-header__back" type="button" onClick={onBack}>← REY ÁNGELES</button>
        <div className="live-header__meta">
          <span>LIVE SYSTEMS</span>
          <span>{String(liveSystems.length).padStart(2, "0")} SYSTEMS</span>
          <span className="status"><i /> ARCHIVE ONLINE</span>
        </div>
      </header>

      <section className="live-intro">
        <span className="live-intro__code">RA / LIVE / 001—{String(liveSystems.length).padStart(3, "0")}</span>
        <div>
          <p className="eyebrow">REAL-TIME SYSTEMS</p>
          <h1>LIVE<br />IMAGE</h1>
          <p className="live-intro__subtitle">GENERATIVE VISUALS / CREATIVE CODE<br />AUDIO / CAMERA / FEEDBACK</p>
        </div>
        <p className="live-intro__statement">Registros de sistemas audiovisuales construidos mediante programación creativa, procesamiento de imagen y generación visual en tiempo real.</p>
      </section>

      <section className="systems-archive">
        <header className="systems-archive__header"><span>INDEX</span><span>SYSTEM / RECORD</span><span>ENGINE</span><span>STATUS</span></header>
        {liveSystems.map((project, index) => (
          <article className={`system-record system-record--${index % 2 === 0 ? "left" : "right"}`} key={project.id}>
            <div className="system-record__meta">
              <div className="system-record__number">{project.number} / {project.software}</div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <dl>
                <div><dt>ENGINE</dt><dd>{project.software}</dd></div>
                <div><dt>TYPE</dt><dd>{project.type}</dd></div>
                <div><dt>INPUT</dt><dd>{project.input}</dd></div>
                <div><dt>YEAR</dt><dd>{project.year}</dd></div>
              </dl>
              <div className="system-record__tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className="system-record__media">
              <div className="system-record__screen">
                <video src={project.video} autoPlay muted loop playsInline preload="metadata" />
                <div className="system-record__screen-ui"><span>{project.number} / {project.software}</span><span className="system-record__running"><i /> RECORD</span></div>
                <span className="system-record__cross">+</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="live-footer"><button type="button" onClick={onBack}>← RETURN TO INDEX</button><span>REY ÁNGELES / LIVE SYSTEMS / 2026</span></footer>
    </main>
  );
}
