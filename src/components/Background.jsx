/** Fixed, slowly drifting glows behind everything. */
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <span className="glow glow--a" />
      <span className="glow glow--b" />
      <span className="glow glow--c" />
      <span className="glow glow--teal" />
    </div>
  );
}
