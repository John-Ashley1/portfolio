import profile from "../data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  const links = [
    ...profile.socials
      .filter((s) => ["github", "linkedin", "facebook"].includes(s.key) && s.url)
      .map((s) => ({ label: s.label, url: s.url, external: true })),
    { label: "Email", url: `mailto:${profile.email}`, external: false },
  ];

  return (
    <Section
      id="contact"
      label="contact"
      className="contact"
      footer={
        <p className="giant" aria-hidden="true">
          Get in touch
        </p>
      }
    >
      <ul className="contact-links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.url} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <Reveal className="contact-main">
        <div>
          <p className="label label--dot">{profile.availability}</p>
          <h2 id="contact-title" className="contact-title">
            Let's work together.
          </h2>
          <p className="contact-fine">
            {profile.email}
            {profile.phone && <> · {profile.phone}</>} · {profile.location}
          </p>
        </div>
        <a className="btn-bracket" href={`mailto:${profile.email}`}>
          Send me an email
        </a>
      </Reveal>

      <p className="copyright label">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </Section>
  );
}
