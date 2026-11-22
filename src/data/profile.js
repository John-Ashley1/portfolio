// Personal info shown across the site. Edit freely.
const profile = {
  name: "John Ashley Loquillano",
  shortName: "J.A. Loquillano",
  location: "Cebu, Philippines",

  // Big two-tone hero headline: `lead` is white, `muted` is grey.
  headline: {
    lead: "Hi, I'm John Ashley.",
    muted: "that solves real problems for real people.",
  },
  about:
    "BS Information Technology student at Cebu Institute of Technology – University (CIT-U), " +
    "building full-stack apps with Spring Boot, React and MySQL. I focus on solving a real problem " +
    "rather than just shipping features, and treat every project as a chance to learn a new tool.",

  // Put your photo in public/ and point to it here. A placeholder shows if it's missing.
  photo: "/images/headshot.jpg",

  email: "loquillanojohnashley3@gmail.com",
  phone: "+63 928 876 0105",
  availability: "Available for internships & projects",

  // GitHub account for the "View all on GitHub" button.
  githubUser: "John-Ashley1",

  // Leave `url` empty to hide a link.
  socials: [
    { key: "github", short: "GH", label: "GitHub", url: "https://github.com/John-Ashley1" },
    { key: "linkedin", short: "LI", label: "LinkedIn", url: "https://www.linkedin.com/in/john-ashley-loquillano-58a45436b/" },
    { key: "instagram", short: "IG", label: "Instagram", url: "" },
    { key: "facebook", short: "FB", label: "Facebook", url: "" },
    { key: "figma", short: "FG", label: "Figma", url: "https://figma.com/@loquillanojohnashley3" },
  ],
};

export default profile;
