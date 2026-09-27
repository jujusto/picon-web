const FAVICON = "/manus-storage/picon-favicon-source_5f0b2de9.png";

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="picon-ambient-layer">
      <div className="picon-ambient-spotlight" />
      <div className="picon-ambient-aperture picon-ambient-aperture-back">
        <img src={FAVICON} alt="" />
      </div>
      <div className="picon-ambient-aperture picon-ambient-aperture-mid">
        <img src={FAVICON} alt="" />
      </div>
      <div className="picon-ambient-aperture picon-ambient-aperture-front">
        <img src={FAVICON} alt="" />
      </div>
      <div className="picon-ambient-ring picon-ambient-ring-one" />
      <div className="picon-ambient-ring picon-ambient-ring-two" />
      <div className="picon-ambient-grain" />
      <div className="picon-ambient-vignette" />
    </div>
  );
}
