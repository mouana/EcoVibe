import Header from "../../Components/Platform/headers/Header";
import ProjectsSection from "../../Components/Platform/ProejectCard/ProjectCards";
import ProjectCards from "../../Components/Platform/ProejectCard/ProjectsSection";
import SolutionsInnovantes from "../../Components/Platform/ProejectCard/SolutionsInnovantes";
import Footer from "../../Components/Platform/footers/Footer";

export default function ProjctCard() {
  return (
    <>
      <Header />
      <ProjectCards />
      <ProjectsSection />
      <SolutionsInnovantes />
      <Footer />
    </>
  );
}
