import Header from "../../Components/Platform/headers/Header";
import ExpertProfiles from "../../Components/Platform/Experts/BgImageComponent";
import ExpertSection from "../../Components/Platform/Experts/ExpertSection";
import SkillsSection from "../../Components/Platform/Experts/SkillsSection";
import Footer from "../../Components/Platform/footers/Footer";
export default function Expert() {
  return (
    <>
      <Header />
      <ExpertSection />
      <SkillsSection />
      <ExpertProfiles />
      <Footer />
    </>
  );
}
