// Projects shown in /works, in this order. The first one is the wide featured card.
// Images go in public/projects/. Missing images show a gradient placeholder.
// `github` must start with "http" for the VIEW CODE button to appear.
// `accent` tints the placeholder gradient (optional).

const projects = [
  {
    name: "CIT-U OJT Management System",
    description:
      "A full-stack internship management system for CIT-U that connects students, partner companies, " +
      "and OJT coordinators in one platform. Companies post internships and manage applicants, students " +
      "apply and track their status, and coordinators monitor the whole process.",
    role: "Company Portal Developer",
    tech: ["Spring Boot", "React", "MySQL", "JWT"],
    members: [
      "Jose Daniel Adlawan",
      "Vinzent Emmanuel Lariosa",
      "John Ashley G Loquillano",
      "Mark Joseph Wayne Villaceran",
    ],
    // Add more screenshots to the list to show them in the gallery.
    images: ["/projects/ojt-1.png"],
    github: "https://github.com/Pochyy/citumanagementsystem",
    accent: "#ff6a1a",
  },
  {
    name: "Happy Meal Game",
    description: "[1–2 sentences: what the game is, how you play it, what makes it fun]",
    role: "[YOUR ROLE]",
    tech: ["Java"],
    members: [
      "Vince Miguel Llanos",
      "Danielle Ben Ibale",
      "Mark Clent Zozobrado",
      "John Ashley G Loquillano",
    ],
    images: ["/projects/happymeal-1.png"],
    github: "[REPO URL]",
    accent: "#ffb070",
  },
  {
    name: "CourtConnect",
    description:
      "A sports court booking and player-finder app. Users can book available courts, find players to " +
      "join a game, and manage their profile, built as my individual project for Systems Integration " +
      "and Architecture.",
    role: "Solo Developer",
    tech: ["Spring Boot", "React", "Supabase"],
    members: ["John Ashley G Loquillano"],
    images: ["/projects/courtconnect-1.png"],
    github: "https://github.com/John-Ashley1/CourtConnect",
    accent: "#5d7d84",
  },
];

export default projects;
