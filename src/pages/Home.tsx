import { Hero } from "../components/sections/Hero";
import { Currently } from "../components/sections/Currently";
import { FeaturedProject } from "../components/sections/FeaturedProject";
import { Engineering } from "../components/sections/Engineering";
import { CaseStudies } from "../components/sections/CaseStudies";
import { Experience } from "../components/sections/Experience";
import { SelectedWork } from "../components/sections/SelectedWork";
import { TechnicalWriting } from "../components/sections/TechnicalWriting";

export function Home() {
  return (
    <>
      <main style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <Hero />
      </main>
      <Currently />
      <FeaturedProject />
      <Engineering />
      <CaseStudies />
      <Experience />
      <SelectedWork />
      <TechnicalWriting />
    </>
  );
}

export default Home;
