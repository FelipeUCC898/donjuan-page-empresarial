import './App.css'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85', alt: 'Barbero perfilando una barba con precisión', label: 'TEXTURA / 01' },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85', alt: 'Detalle de corte masculino en barbería', label: 'CORTE / 02' },
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85', alt: 'Interior de barbería con estación de trabajo', label: 'ATMÓSFERA / 03' },
]

const barbers = [
  { name: 'Juan David', role: 'Corte clásico / Director', initials: 'JD' },
  { name: 'Santiago', role: 'Fade / Diseño', initials: 'S' },
  { name: 'Mateo', role: 'Barba / Ritual', initials: 'M' },
]

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }

function App() {
  return (
    <div className="site-shell" data-theme="dg">
      <header className="site-header">
        <a className="brand-lockup" href="#inicio" aria-label="Barbería Don Juan, inicio"><img src="/don-juan-logo.png" alt="Don Juan Barbería" /></a>
        <nav className="desktop-nav" aria-label="Navegación principal"><a href="#manifiesto">Nosotros</a><a href="#trabajo">Trabajo</a><a href="#sedes">Sedes</a></nav>
        <a className="header-booking" href="https://wa.me/573001234567" target="_blank" rel="noreferrer">Agendar <Arrow /></a>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title"><div className="hero-media" role="img" aria-label="Barbero trabajando en un corte de precisión" /><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow">Pasto · Nariño / Desde 2016</p><h1 id="hero-title">El corte<br /><em>como ritual.</em></h1><a className="text-link hero-link" href="#trabajo">Explorar nuestro trabajo <Arrow /></a></div><div className="hero-footer"><span>01 — 04</span><span>Scroll para entrar</span></div></section>

        <section className="manifesto section-pad" id="manifiesto" aria-labelledby="manifesto-title"><div className="section-kicker"><span>01</span><span>La casa</span></div><div className="manifesto-copy"><h2 id="manifesto-title">Una barbería<br /><span>con carácter.</span></h2><div className="manifesto-text"><p>Don Juan nace en Pasto para quienes entienden que un buen corte no termina frente al espejo. Es actitud, presencia y una forma de habitar la ciudad.</p><p>Trabajamos con técnica, conversación y respeto por el oficio. Cada visita es un momento para bajar el ruido y salir con una versión más precisa de ti.</p><a className="text-link" href="#sedes">Conocer la casa <Arrow /></a></div></div></section>

        <section className="work-section" id="trabajo" aria-labelledby="work-title"><div className="section-pad section-heading"><div className="section-kicker"><span>02</span><span>El trabajo</span></div><h2 id="work-title">Hecho a mano.<br /><em>Hecho para ti.</em></h2></div><div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.src}><img src={item.src} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} /><figcaption>{item.label} <Arrow /></figcaption></figure>)}</div><div className="section-pad work-footer"><p>Degradados limpios. Barbas con intención.<br />Una firma que se reconoce.</p><a className="outline-link" href="https://wa.me/573001234567" target="_blank" rel="noreferrer">Reservar una silla <Arrow /></a></div></section>

        <section className="locations section-pad" id="sedes" aria-labelledby="locations-title"><div className="section-kicker"><span>03</span><span>Encuéntranos</span></div><div className="locations-layout"><div><h2 id="locations-title">Dos casas.<br /><em>Una misma firma.</em></h2><p className="location-intro">Elige la sede que te quede más cerca. La experiencia Don Juan te espera en ambas.</p></div><div className="location-list"><a className="location-row" href="https://maps.google.com/?q=Pasto+Nariño" target="_blank" rel="noreferrer"><span className="location-index">01</span><span><strong>Centro</strong><small>Calle 18 # 24–38 · Pasto</small></span><Arrow /></a><a className="location-row" href="https://maps.google.com/?q=Pasto+Nariño" target="_blank" rel="noreferrer"><span className="location-index">02</span><span><strong>La Aurora</strong><small>Cra. 32 # 18–11 · Pasto</small></span><Arrow /></a></div></div></section>

        <section className="team section-pad" aria-labelledby="team-title"><div className="section-kicker"><span>04</span><span>El equipo</span></div><div className="team-heading"><h2 id="team-title">Las manos<br /><em>de la casa.</em></h2><p>Profesionales con mirada propia, unidos por el mismo estándar de detalle.</p></div><div className="barber-grid">{barbers.map((barber) => <article className="barber-card" key={barber.name}><div className="barber-portrait"><span>{barber.initials}</span></div><div className="barber-meta"><strong>{barber.name}</strong><span>{barber.role}</span></div></article>)}</div></section>

        <section className="closing-cta" aria-label="Agendamiento"><div className="closing-image" /><div className="closing-overlay" /><div className="closing-copy"><p className="eyebrow">Tu próximo ritual comienza aquí</p><h2>Ven a sentarte<br /><em>con nosotros.</em></h2><a className="outline-link light" href="https://wa.me/573001234567" target="_blank" rel="noreferrer">Agendar con un barbero <Arrow /></a></div></section>
      </main>

      <footer className="site-footer section-pad"><div className="footer-top"><img src="/don-juan-logo.png" alt="Don Juan Barbería" /><p>Barbería contemporánea<br />Pasto, Nariño</p></div><div className="footer-bottom"><span>© 2026 Don Juan Barbería</span><div><a href="#inicio">Instagram</a><a href="mailto:hola@barberiadonjuan.com">Contacto</a></div><span>Diseñado con oficio</span></div></footer>

      <div className="floating-actions" aria-label="Accesos rápidos"><a className="floating-action whatsapp" href="https://wa.me/573001234567" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><span>WA</span><small>Atención</small></a><a className="floating-action waibook" href="https://wa.me/573001234567" target="_blank" rel="noreferrer" aria-label="Agendar en Waibook"><span>W</span><small>Waibook</small></a></div>
    </div>
  )
}

export default App
