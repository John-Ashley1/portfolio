import React, { useState, useRef } from "react";

const NAV_OFFSET = 84;

export default function Resume() {
  const photo = "/images/headshot.jpg";

  const scrollToId = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const [certs, setCerts] = useState([
    {
      id: "cert-01",
      name: "Java Object-Oriented Programming",
      org: "CodeChum · CSIT227-2025-2026-G8 · Issued Dec 3, 2025",
      fileUrl: "/certificates/java-oop-programming.pdf",
      fileName: "java-oop-programming.pdf",
    },
    {
      id: "cert-02",
      name: "Introduction to HTML",
      org: "Sololearn · Certificate CC-AJZL5OVD · Issued Aug 31, 2025",
      fileUrl: "/certificates/introduction-to-html.pdf",
      fileName: "introduction-to-html.pdf",
    },
    { id: "cert-03", name: "IBM SkillsBuild Certificate", org: "[Course Name] · IBM SkillsBuild", fileUrl: null, fileName: null },
    { id: "cert-04", name: "Data Analytics Certificate", org: "[Organization]", fileUrl: null, fileName: null },
  ]);
  const fileInputs = useRef({});

  const handleCertFile = (certId, file) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Please choose a PDF file.");
      return;
    }
    const url = URL.createObjectURL(file);
    setCerts((prev) =>
      prev.map((c) => (c.id === certId ? { ...c, fileUrl: url, fileName: file.name } : c))
    );
  };

  const education = [
    { school: "Pardo Elementary School", level: "Elementary", years: "2010 – 2016" },
    { school: "Toong Integrated School", level: "Junior High School", years: "2016 – 2018" },
    { school: "Buanoy National High School", level: "Junior High School /Senior High School", years: "2018 – 2023" },
    { school: "Cebu Institute of Technology – University", level: "BS Information Technology", years: "2023 – 2027" },
  ];

  return (
    <div className="resume-root">
      <style>{`
        :root{
          --bg:#0B0D0F;
          --card:#17191C;
          --card-2:#1D2023;
          --line:#26292D;
          --text:#F5F6F7;
          --text-soft:#9CA3AF;
          --accent:#2ECC71;
          --accent-dim:rgba(46,204,113,0.14);
        }
        .resume-root *{box-sizing:border-box;}
        .resume-root{
          background:var(--bg);
          color:var(--text);
          font-family:'Inter',sans-serif;
          -webkit-font-smoothing:antialiased;
          line-height:1.6;
        }
        .resume-root h1,.resume-root h2,.resume-root h3{
          font-family:'Sora',sans-serif;
          margin:0;
        }
        .wrap{ max-width:1080px;margin:0 auto;padding:0 32px; }
        @media (max-width:640px){ .wrap{ padding:0 20px; } }

        /* nav */
        .nav{
          position:sticky;top:0;z-index:50;
          background:rgba(11,13,15,0.9);
          backdrop-filter:blur(8px);
          border-bottom:1px solid var(--line);
        }
        .nav-inner{
          max-width:1080px;margin:0 auto;padding:18px 32px;
          display:flex;align-items:center;justify-content:space-between;
        }
        .logo{ display:flex;align-items:center;gap:10px;font-weight:700;font-size:17px; }
        .logo-mark{
          width:32px;height:32px;border-radius:50%;background:var(--accent);
          color:#06170E;display:flex;align-items:center;justify-content:center;
          font-family:'Sora',sans-serif;font-weight:800;font-size:15px;
        }
        .nav-links{ display:flex;gap:28px;list-style:none;margin:0;padding:0; }
        .nav-links a{
          color:var(--text-soft);text-decoration:none;font-size:14px;font-weight:500;
          padding-bottom:4px;border-bottom:2px solid transparent;
        }
        .nav-links a:hover{ color:var(--text);border-color:var(--accent); }
        @media (max-width:760px){ .nav-links{ display:none; } }

        /* hero */
        .hero{ padding:80px 0 60px; }
        .hero-grid{ display:grid;grid-template-columns:1fr 300px;gap:56px;align-items:center; }
        @media (max-width:760px){ .hero-grid{ grid-template-columns:1fr; } }
        .hello{ color:var(--text-soft);font-size:16px;margin-bottom:8px; }
        .hero h1{ font-size:48px;font-weight:800;line-height:1.08; }
        .role{
          color:var(--accent);font-size:19px;font-weight:600;margin-top:14px;
        }
        .hero-p{ color:var(--text-soft);font-size:15px;margin-top:18px;max-width:54ch;line-height:1.8; }
        .social-row{ display:flex;gap:12px;margin-top:26px; }
        .social-btn{
          width:38px;height:38px;border-radius:50%;
          background:var(--card-2);border:1px solid var(--line);
          display:flex;align-items:center;justify-content:center;
          color:var(--text);text-decoration:none;font-size:14px;
        }
        .social-btn:hover{ border-color:var(--accent);color:var(--accent); }
        .hero-photo{
          width:300px;height:340px;border-radius:14px;overflow:hidden;
          border:1px solid var(--line);
          background:var(--card);
        }
        .hero-photo img{ width:100%;height:100%;object-fit:cover;display:block; }

        /* highlight cards */
        .highlights{
          display:grid;grid-template-columns:repeat(3,1fr);gap:20px;
          margin-bottom:70px;
        }
        @media (max-width:760px){ .highlights{ grid-template-columns:1fr; } }
        .hi-card{
          background:var(--card);border:1px solid var(--line);border-radius:10px;
          padding:32px 26px;text-align:center;
        }
        .hi-icon{
          width:52px;height:52px;border-radius:50%;background:var(--accent-dim);
          display:flex;align-items:center;justify-content:center;margin:0 auto 18px;
          color:var(--accent);
        }
        .hi-card h3{ font-size:16px;font-weight:700; }
        .hi-rule{ width:28px;height:2px;background:var(--accent);margin:10px auto 14px;border-radius:2px; }
        .hi-card p{ font-size:13px;color:var(--text-soft);margin:0; }

        /* sections */
        section{ padding-bottom:70px;scroll-margin-top:84px; }
        .sec-head{ margin-bottom:28px; }
        .sec-eyebrow{
          color:var(--accent);font-size:12.5px;font-weight:700;text-transform:uppercase;
          letter-spacing:.14em;margin-bottom:8px;
        }
        .sec-head h2{ font-size:28px;font-weight:800; }

        .about-p{ color:var(--text-soft);font-size:15px;max-width:74ch;line-height:1.9; }

        /* skills */
        .skills-grid{ display:grid;grid-template-columns:repeat(3,1fr);gap:22px; }
        @media (max-width:760px){ .skills-grid{ grid-template-columns:1fr; } }
        .skill-card{
          background:var(--card);border:1px solid var(--line);border-radius:10px;padding:24px;
        }
        .skill-card h3{ font-size:14.5px;font-weight:700;color:var(--accent);margin-bottom:14px; }
        .chip-row{ display:flex;flex-wrap:wrap;gap:8px; }
        .chip{
          font-size:12.5px;color:var(--text);
          background:var(--card-2);border:1px solid var(--line);
          padding:6px 12px;border-radius:20px;
        }

        /* projects */
        .proj{
          background:var(--card);border:1px solid var(--line);border-radius:10px;
          padding:28px;margin-bottom:20px;
        }
        .proj:last-child{ margin-bottom:0; }
        .proj-top{ display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap; }
        .proj h3{ font-size:17px;font-weight:700; }
        .proj-type{
          font-size:11px;font-weight:600;color:var(--accent);
          background:var(--accent-dim);padding:4px 10px;border-radius:20px;white-space:nowrap;
        }
        .proj-stack{ display:flex;flex-wrap:wrap;gap:8px;margin-top:14px; }
        .proj-stack span{
          font-size:11.5px;color:var(--text-soft);
          border:1px solid var(--line);padding:4px 10px;border-radius:20px;
        }
        .proj p.desc{ font-size:13.5px;color:var(--text-soft);margin:16px 0 12px;line-height:1.8; }
        .proj ul{ margin:0;padding-left:18px;color:var(--text-soft);font-size:13px;line-height:1.9; }
        .proj ul li::marker{ color:var(--accent); }

        /* education / certs */
        .ed-grid{ display:grid;grid-template-columns:1fr 1fr;gap:24px; }
        @media (max-width:760px){ .ed-grid{ grid-template-columns:1fr; } }
        .ed-card{
          background:var(--card);border:1px solid var(--line);border-radius:10px;padding:24px;
        }
        .ed-card h3{ font-size:15px;font-weight:700; }
        .ed-meta{ font-size:12.5px;color:var(--text-soft);margin-top:6px; }
        /* education timeline */
        .edu-list{ position:relative;padding-left:26px; }
        .edu-list::before{ content:"";position:absolute;left:6px;top:6px;bottom:6px;width:1px;background:var(--line); }
        .edu-entry{ position:relative;padding-bottom:22px; }
        .edu-entry:last-child{ padding-bottom:0; }
        .edu-entry::before{
          content:"";position:absolute;left:-26px;top:3px;width:11px;height:11px;border-radius:50%;
          background:var(--bg);border:2px solid var(--accent);
        }
        .edu-entry:last-child::before{ background:var(--accent); }
        .edu-school{ font-size:14.5px;font-weight:700; }
        .edu-level{ font-size:12.5px;color:var(--accent);margin-top:3px;font-weight:600; }
        .edu-years{ font-size:12px;color:var(--text-soft);margin-top:3px; }

        .cert-item{ padding:14px 0;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap; }
        .cert-item:first-child{ border-top:none;padding-top:0; }
        .cert-name{ font-size:13.5px;font-weight:600; }
        .cert-org{ font-size:12px;color:var(--text-soft);margin-top:3px; }
        .cert-actions{ display:flex;align-items:center;gap:10px;flex-shrink:0; }
        .cert-view{
          font-size:12px;font-weight:600;color:var(--accent);text-decoration:none;
          border:1px solid var(--accent);padding:6px 12px;border-radius:20px;white-space:nowrap;
        }
        .cert-view:hover{ background:var(--accent-dim); }
        .cert-upload-label{
          font-size:12px;font-weight:600;color:var(--text-soft);text-decoration:none;cursor:pointer;
          border:1px dashed var(--line);padding:6px 12px;border-radius:20px;white-space:nowrap;
        }
        .cert-upload-label:hover{ color:var(--text);border-color:var(--accent); }
        .cert-replace{
          font-size:11.5px;color:var(--text-soft);background:none;border:none;cursor:pointer;
          text-decoration:underline;padding:0;
        }
        .cert-replace:hover{ color:var(--accent); }
        .cert-file-input{ display:none; }

        /* portfolio */
        .port-row{ display:grid;grid-template-columns:repeat(3,1fr);gap:18px; }
        @media (max-width:640px){ .port-row{ grid-template-columns:1fr; } }
        .port-card{
          background:var(--card);border:1px solid var(--line);border-radius:10px;
          padding:22px;text-decoration:none;display:block;color:var(--text);
        }
        .port-card:hover{ border-color:var(--accent); }
        .port-label{
          font-size:11px;font-weight:700;color:var(--accent);
          text-transform:uppercase;letter-spacing:.08em;
        }
        .port-url{ font-size:13px;color:var(--text-soft);margin-top:8px;word-break:break-all; }

        /* contact / footer */
        .contact-card{
          background:var(--card);border:1px solid var(--line);border-radius:14px;
          padding:42px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;
        }
        .contact-card h2{ font-size:24px;font-weight:800; }
        .contact-card p{ color:var(--text-soft);font-size:13.5px;margin-top:8px;max-width:40ch; }
        .contact-list{ display:flex;flex-direction:column;gap:10px; }
        .contact-list a{
          color:var(--text);text-decoration:none;font-size:13.5px;display:flex;gap:10px;align-items:center;
        }
        .contact-list a:hover{ color:var(--accent); }
        .contact-list .lab{ color:var(--accent);width:60px;display:inline-block;font-size:11.5px;text-transform:uppercase;letter-spacing:.06em; }

        footer{ padding:30px 0 50px;border-top:1px solid var(--line);margin-top:10px; }
        .fine{
          display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;
          font-size:12px;color:var(--text-soft);
        }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <div className="nav">
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-mark">JA</span>John Ashley Loquillano
          </div>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => scrollToId(e, "about")}>About</a></li>
            <li><a href="#skills" onClick={(e) => scrollToId(e, "skills")}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => scrollToId(e, "projects")}>Projects</a></li>
            <li><a href="#education" onClick={(e) => scrollToId(e, "education")}>Education</a></li>
            <li><a href="#portfolio" onClick={(e) => scrollToId(e, "portfolio")}>Portfolio</a></li>
            <li><a href="#contact" onClick={(e) => scrollToId(e, "contact")}>Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        {/* HERO */}
        <section className="hero" style={{ paddingBottom: 60 }}>
          <div className="hero-grid">
            <div>
              <div className="hello">Hello, I'm</div>
              <h1>John Ashley<br />Loquillano</h1>
              <div className="role">BS Information Technology Student | Aspiring Software Developer</div>
              <p className="hero-p">
                Motivated BSIT student based in Cebu, Philippines, focused on web development, software
                engineering, and building practical technology solutions — with a habit of learning something
                new on every project.
              </p>
              <div className="social-row">
                <a className="social-btn" href="mailto:loquillanojohnashley3@gmail.com" aria-label="Email">✉</a>
                <a className="social-btn" href="https://www.linkedin.com/in/john-ashley-loquillano-58a45436b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                <a className="social-btn" href="https://github.com/John-Ashley1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
                <a className="social-btn" href="tel:+6392888760105" aria-label="Phone">☎</a>
              </div>
            </div>
            <div className="hero-photo">
              <img src={photo} alt="Portrait of John Ashley Loquillano" />
            </div>
          </div>
        </section>

        {/* HIGHLIGHT CARDS */}
        <div className="highlights">
          <div className="hi-card">
            <div className="hi-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6"/><path d="M4 9h16M8 6v3" stroke="currentColor" strokeWidth="1.6"/></svg>
            </div>
            <h3>Web Development</h3>
            <div className="hi-rule"></div>
            <p>React, JavaScript, HTML/CSS and PHP/MySQL for full end-to-end web systems.</p>
          </div>
          <div className="hi-card">
            <div className="hi-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 4h6l1 3h3v13H5V7h3l1-3z" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.6"/></svg>
            </div>
            <h3>Software Engineering</h3>
            <div className="hi-rule"></div>
            <p>Database design, application logic, and Git-based collaborative development.</p>
          </div>
          <div className="hi-card">
            <div className="hi-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 19l6-6M14 5l5 5-9 9H5v-5l9-9z" stroke="currentColor" strokeWidth="1.6"/></svg>
            </div>
            <h3>UI / UX Design</h3>
            <div className="hi-rule"></div>
            <p>Designing clean, usable interfaces in Figma, from wireframe to dashboard.</p>
          </div>
        </div>

        {/* ABOUT */}
        <section id="about">
          <div className="sec-head">
            <div className="sec-eyebrow">Introduction</div>
            <h2>About Me</h2>
          </div>
          <p className="about-p">
            I'm a BS Information Technology student at Cebu Institute of Technology – University with a strong
            interest in web development, software engineering, and practical technology solutions. Through
            coursework and hands-on projects, I've built systems ranging from internship management platforms to
            billing trackers, focusing each time on solving a real problem rather than just shipping features. I
            work well in teams, enjoy breaking down complex requirements into manageable parts, and treat every
            project — coursework or personal — as a chance to learn a new tool or sharpen an existing skill.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="sec-head">
            <div className="sec-eyebrow">Capabilities</div>
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Languages &amp; Frameworks</h3>
              <div className="chip-row">
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">React.js</span>
                <span className="chip">Java</span>
                <span className="chip">Python</span>
                <span className="chip">PHP</span>
                <span className="chip">MySQL</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Tools &amp; Design</h3>
              <div className="chip-row">
                <span className="chip">Git</span>
                <span className="chip">GitHub</span>
                <span className="chip">Figma</span>
                <span className="chip">UI/UX Design</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Professional</h3>
              <div className="chip-row">
                <span className="chip">Problem Solving</span>
                <span className="chip">Communication</span>
                <span className="chip">Teamwork</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="sec-head">
            <div className="sec-eyebrow">Selected Work</div>
            <h2>Projects</h2>
          </div>

          <div className="proj">
            <div className="proj-top">
              <h3>CIT University Internship &amp; OJT Management System</h3>
              <span className="proj-type">Academic · Team Project</span>
            </div>
            <div className="proj-stack">
              <span>React.js</span><span>Node.js</span><span>MySQL</span><span>QR Integration</span>
            </div>
            <p className="desc">
              A React-based platform connecting students, host companies, and OJT coordinators in one workflow —
              covering internship applications, approval routing, QR-based attendance, and reporting.
            </p>
            <ul>
              <li>Built core UI flows for student application submission and coordinator review</li>
              <li>Implemented QR code attendance logging and status tracking</li>
              <li>Contributed to analytics views summarizing attendance and application data</li>
            </ul>
          </div>

          <div className="proj">
            <div className="proj-top">
              <h3>Hospital Bill Management System</h3>
              <span className="proj-type">Concept Project</span>
            </div>
            <div className="proj-stack">
              <span>PHP</span><span>MySQL</span><span>JavaScript</span>
            </div>
            <p className="desc">
              A digital, installment-based billing and payment tracking platform designed for emergency-case
              patients, reducing manual paperwork and improving payment transparency.
            </p>
            <ul>
              <li>Designed the database schema for patients, bills, and installment records</li>
              <li>Developed payment tracking logic and status dashboards</li>
              <li>Proposed UI flow to simplify billing for non-technical hospital staff</li>
            </ul>
          </div>

          <div className="proj">
            <div className="proj-top">
              <h3>Grade Trace App</h3>
              <span className="proj-type">Personal Project</span>
            </div>
            <div className="proj-stack">
              <span>React.js</span><span>Figma</span><span>CSS</span>
            </div>
            <p className="desc">
              A student grade-tracking application with a Filipino-inspired interface, helping students log
              subjects, monitor grade trends, and visualize academic progress on a dashboard.
            </p>
            <ul>
              <li>Designed the dashboard UI and Filipino-inspired visual identity in Figma</li>
              <li>Built grade input, computation, and progress-tracking components</li>
              <li>Iterated on layout based on peer usability feedback</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION + CERTS */}
        <section id="education">
          <div className="sec-head">
            <div className="sec-eyebrow">Background</div>
            <h2>Education &amp; Certificates</h2>
          </div>
          <div className="ed-grid">
            <div className="ed-card">
              <h3 style={{ marginBottom: 16 }}>Education</h3>
              <div className="edu-list">
                {education.map((e) => (
                  <div className="edu-entry" key={e.school}>
                    <div className="edu-school">{e.school}</div>
                    <div className="edu-level">{e.level}</div>
                    <div className="edu-years">{e.years}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ed-card">
              <h3 style={{ marginBottom: 8 }}>Certificates</h3>
              {certs.map((cert) => (
                <div className="cert-item" key={cert.id}>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-org">{cert.org}</div>
                  </div>
                  <div className="cert-actions">
                    {cert.fileUrl ? (
                      <>
                        <a className="cert-view" href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
                          View PDF ↗
                        </a>
                        <button
                          className="cert-replace"
                          onClick={() => fileInputs.current[cert.id] && fileInputs.current[cert.id].click()}
                        >
                          replace
                        </button>
                      </>
                    ) : (
                      <label className="cert-upload-label" htmlFor={`file-${cert.id}`}>
                        + Attach PDF
                      </label>
                    )}
                    <input
                      id={`file-${cert.id}`}
                      className="cert-file-input"
                      type="file"
                      accept="application/pdf"
                      ref={(el) => (fileInputs.current[cert.id] = el)}
                      onChange={(e) => handleCertFile(cert.id, e.target.files && e.target.files[0])}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* PORTFOLIO */}
        <section id="portfolio">
          <div className="sec-head">
            <div className="sec-eyebrow">Links</div>
            <h2>Portfolio</h2>
          </div>
          <div className="port-row">
            <a className="port-card" href="https://github.com/John-Ashley1/portfolio" target="_blank" rel="noopener noreferrer">
              <div className="port-label">GitHub Portfolio</div>
              <div className="port-url">github.com/John-Ashley1/portfolio</div>
            </a>
            <a className="port-card" href="https://johnashleyloquillano.dev" target="_blank" rel="noopener noreferrer">
              <div className="port-label">Live Projects</div>
              <div className="port-url">......</div>
            </a>
            <a className="port-card" href="https://figma.com/@loquillanojohnashley3" target="_blank" rel="noopener noreferrer">
              <div className="port-label">Figma / Behance</div>
              <div className="port-url">figma.com/@loquillanojohnashley3</div>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ paddingBottom: 0 }}>
          <div className="contact-card">
            <div>
              <h2>Let's build something.</h2>
              <p>Open to internships and entry-level roles in web and software development.</p>
            </div>
            <div className="contact-list">
              <a href="mailto:loquillanojohnashley3@gmail.com"><span className="lab">Email</span>loquillanojohnashley3@gmail.com</a>
              <a href="tel:+639288760105"><span className="lab">Phone</span>+63 928 876 0105</a>
              <a href="https://www.linkedin.com/in/john-ashley-loquillano-58a45436b/" target="_blank" rel="noopener noreferrer"><span className="lab">LinkedIn</span>linkedin.com/in/john-ashley-loquillano-58a45436b/</a>
              <a href="https://github.com/John-Ashley1" target="_blank" rel="noopener noreferrer"><span className="lab">GitHub</span>github.com/John-Ashley1</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="fine">
            <span>© 2023 John Ashley Loquillano</span>
            <span>Cebu, Philippines</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
