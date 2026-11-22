import { useCallback, useState } from "react";
import profile from "../data/profile";
import projects from "../data/projects";
import Section, { SectionTitle } from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";

export default function Works() {
  const [gallery, setGallery] = useState(null);
  const close = useCallback(() => setGallery(null), []);

  return (
    <Section id="works" label="works">
      <SectionTitle id="works-title">latest projects</SectionTitle>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} className={i === 0 ? "projects-featured" : ""} delay={i === 0 ? 0 : (i % 2) * 80}>
            <ProjectCard project={p} featured={i === 0} onOpenGallery={setGallery} />
          </Reveal>
        ))}
      </div>

      <div className="works-footer">
        <a className="btn-line" href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noopener noreferrer">
          View all on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>

      <Lightbox
        open={Boolean(gallery)}
        title={gallery?.name}
        kicker={gallery ? `Gallery / ${gallery.role}` : ""}
        images={gallery?.images || []}
        accent={gallery?.accent}
        link={gallery && /^https?:\/\//.test(gallery.github) ? gallery.github : ""}
        linkLabel="View code"
        onClose={close}
      />
    </Section>
  );
}
