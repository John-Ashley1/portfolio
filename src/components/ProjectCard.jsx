import SmartImage from "./SmartImage";

const isPlaceholder = (s) => /^\[.*\]$/.test(s.trim());

const initials = (name) => {
  // First + last name, e.g. "John Ashley G Loquillano" -> "JL".
  const words = name.replace(/[[\]]/g, "").split(/\s+/).filter(Boolean);
  const picked = words.length > 1 ? [words[0], words[words.length - 1]] : words;
  return picked
    .map((w) => w[0])
    .join("")
    .toUpperCase();
};

export default function ProjectCard({ project, featured = false, onOpenGallery }) {
  const { name, description, role, tech, members, images, github, accent } = project;
  const hasCode = /^https?:\/\//.test(github || "");
  const solo = members.length <= 1;

  return (
    <article className={`card project-card glass-card ${featured ? "project-card--featured" : ""}`.trim()}>
      <div className="card-media project-media">
        <SmartImage src={images[0]} alt={`${name} screenshot`} label={name} accent={accent} loading="lazy" />
        <div className="caption">
          <span>
            {name} <em>/</em> {role}
          </span>
        </div>
      </div>

      <div className="project-body">
        <div className="project-main">
          <h3>{name}</h3>
          <p className={isPlaceholder(description) ? "placeholder-text" : ""}>{description}</p>
        </div>

        <div className="project-side">
          <ul className="tags" aria-label="Tech stack">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="team">
            <span className="label">Team</span>
            {solo ? (
              <span className="team-solo">Solo project</span>
            ) : (
              <ul className="team-list">
                {members.map((m) => (
                  <li key={m}>
                    <span className="avatar" aria-hidden="true">
                      {initials(m)}
                    </span>
                    <span className="team-name">{m}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="project-actions">
            {hasCode && (
              <a className="btn-mini" href={github} target="_blank" rel="noopener noreferrer">
                View code
              </a>
            )}
            <button type="button" className="btn-mini btn-mini--accent" onClick={() => onOpenGallery(project)}>
              Gallery
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
