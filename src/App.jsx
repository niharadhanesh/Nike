import Hero from "./components/Hero/Hero";
import Stats from "./components/Sections/Stats";
import ProductGrid from "./components/Sections/ProductGrid";
import CTA from "./components/Sections/CTA";
import "./components/Sections/Sections.css";

export default function App() {
  return (
    <main>
      <Hero />
      <Stats />
      <ProductGrid />
      <CTA />
    </main>
  );
}
