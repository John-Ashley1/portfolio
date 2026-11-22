import { useCallback, useState } from "react";
import certificates from "../data/certificates";
import Section, { SectionTitle } from "./Section";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";

export default function Certificates() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <Section id="certificates" label="certificates">
      <SectionTitle id="certificates-title">certificates</SectionTitle>

      <div className="cert-grid">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 80}>
            <div className="card cert-card">
            <button className="card-media cert-media" onClick={() => setOpen(c)} aria-label={`View ${c.title} certificate`}>
              <img src={c.image} alt="" loading="lazy" />
              <span className="caption">
                <span>
                  {c.issuer} <em>/</em> {c.date}
                </span>
              </span>
            </button>
            <div className="cert-body">
              <div>
                <h3>{c.title}</h3>
                {c.note && <p className="label">{c.note}</p>}
              </div>
              {c.link && (
                <a className="btn-mini btn-mini--accent" href={c.link} target="_blank" rel="noopener noreferrer">
                  Verify
                </a>
              )}
            </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Lightbox
        open={Boolean(open)}
        title={open?.title}
        kicker={open ? `${open.issuer} / ${open.date}` : ""}
        images={open ? [open.image] : []}
        link={open?.link}
        linkLabel="Verify"
        onClose={close}
      />
    </Section>
  );
}
