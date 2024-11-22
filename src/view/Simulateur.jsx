import Header from "../components/headers/Header"
import Footer from "../components/footers/Footer"
import Decouvrir from "../components/Simulateur/Decouvrir"
import Formulaire from "../components/Simulateur/Formulaire"
import ProjectCard from "../components/Simulateur/ProjectCard"
import Slide from "../components/Simulateur/Slide"
import Devis from "../components/Simulateur/Devis"
import TeamSection from "../components/Simulateur/TeamSection"
export default function Simulateur(){
    return(
        <>
        <Header />
        <Slide/>
        <Decouvrir/>
        <Formulaire/>
        <ProjectCard/>
        <Devis/>
        <TeamSection/>
        <Footer />
        </>
    )
}