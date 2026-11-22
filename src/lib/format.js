export const pad2 = (n) => (typeof n === "number" ? String(n).padStart(2, "0") : n);

/** Resolve a stat entry from stats.js to a display value. */
export function resolveStat(stat, counts) {
  let value = stat.value;
  if (stat.source === "projects") value = counts.projects;
  if (stat.source === "certificates") value = counts.certificates;
  if (value === null || value === undefined) return "—";
  return `${pad2(value)}${stat.suffix || ""}`;
}
