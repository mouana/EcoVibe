import Header from "../../Components/Platform/headers/Header";
import Footer from "../../Components/Platform/footers/Footer";
import Decouvrir from "../../Components/Platform/Simulateur/Decouvrir";
import Formulaire from "../../Components/Platform/Simulateur/Formulaire";
import ProjectCard from "../../Components/Platform/Simulateur/ProjectCard";
import Slide from "../../Components/Platform/Simulateur/Slide";
import Devis from "../../Components/Platform/Simulateur/Devis";
import TeamSection from "../../Components/Platform/Simulateur/TeamSection";
export default function Simulateur() {
  return (
    <>
      <Header />
      <Slide />
      <Decouvrir />
      <Formulaire />
      <ProjectCard />
      <Devis />
      <TeamSection />
      <Footer />
    </>
  );
}
