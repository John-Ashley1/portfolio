import { useState } from "react";
import profile from "../data/profile";
import heroStats from "../data/stats";
import projects from "../data/projects";
import certificates from "../data/certificates";
import { resolveStat } from "../lib/format";
import Section from "./Section";
import Reveal from "./Reveal";

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const counts = { projects: projects.length, certificates: certificates.length };

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo));
  const heroSocials = profile.socials.filter(
    (s) => ["github", "linkedin", "instagram"].includes(s.key) && s.url
  );

  return (
    <Section id="about" label="about" className="hero">
      <div className="hero-grid">
        <Reveal as="ul" className="hero-stats">
          {heroStats.map((s) => (
            <li key={s.label}>
              <span className="hero-stat-num">{resolveStat(s, counts)}</span>
              <span className="label">{s.label}</span>
            </li>
          ))}
        </Reveal>

        <Reveal className="hero-main" delay={80}>
          <p className="label label--dot">{profile.location} · BSIT @ CIT-U</p>
          <h1 id="about-title" className="headline">
            {profile.headline.lead} <span className="muted">{profile.headline.muted}</span>
          </h1>
          <p className="hero-about">{profile.about}</p>
          {heroSocials.length > 0 && (
            <ul className="hero-socials">
              {heroSocials.map((s) => (
                <li key={s.key}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
                    {s.short}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal className="hero-photo" delay={160}>
          {photoOk ? (
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setPhotoOk(false)} />
          ) : (
            <div className="photo-placeholder" role="img" aria-label="Photo placeholder">
              {initials(profile.name)}
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
