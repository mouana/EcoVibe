import Header from '../Components/headers/Header';
import ExpertProfiles from '../Components/Experts/BgImageComponent'
import ExpertSection from '../Components/Experts/ExpertSection'
import SkillsSection from '../Components/Experts/SkillsSection'
import Footer from '../Components/footers/Footer';
export default function Expert(){
    return(
        <>
        <Header />
        <ExpertSection />
        <SkillsSection />
        <ExpertProfiles />
        <Footer />
        </>
    )
}