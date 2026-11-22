import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Works from "./components/Works";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Background />
      <div id="top" className="page">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Works />
          <Certificates />
        </main>
        <footer>
          <Contact />
        </footer>
      </div>
    </>
  );
}
