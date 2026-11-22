import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";
import projects from "./data/projects";

test("renders the hero, nav and the project cards", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/John Ashley/i);
  expect(screen.getByRole("link", { name: "Works" })).toHaveAttribute("href", "#works");
  expect(screen.queryByText(/experience/i)).not.toBeInTheDocument();
  projects.forEach((p) => expect(screen.getByRole("heading", { level: 3, name: p.name })).toBeInTheDocument());
});

test("gallery opens a lightbox for the project", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: /gallery/i })[0]);
  const dialog = screen.getByRole("dialog");
  const first = projects[0];
  expect(within(dialog).getByRole("img", { name: new RegExp(`${first.name}, image 1`, "i") })).toBeInTheDocument();
  if (first.images.length > 1) {
    fireEvent.click(within(dialog).getByRole("button", { name: /next image/i }));
    expect(within(dialog).getByText(`02 / ${String(first.images.length).padStart(2, "0")}`)).toBeInTheDocument();
  }
});
