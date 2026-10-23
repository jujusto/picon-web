const FAVICON = "/manus-storage/picon-favicon-source_5f0b2de9.png";

/** Halo optique du hero, dérivé du diaphragme PICON et purement décoratif. */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="picon-hero-ambient">
      <div className="picon-hero-glow" />
      <img className="picon-hero-iris picon-hero-iris-back" src={FAVICON} alt="" />
      <img className="picon-hero-iris picon-hero-iris-front" src={FAVICON} alt="" />
      <span className="picon-hero-ring picon-hero-ring-one" />
      <span className="picon-hero-ring picon-hero-ring-two" />
    </div>
  );
}
