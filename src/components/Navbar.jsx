import profile from "../data/profile";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="nav glass">
      <a className="nav-name" href="#top">
        <span className="nav-name-full">{profile.name}</span>
        <span className="nav-name-short">{profile.shortName}</span>
      </a>
      <nav aria-label="Primary">
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
