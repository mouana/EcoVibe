import Header from "../Components/headers/Header"
import Footer from "../Components/footers/Footer"
import Decouvrir from "../Components/Simulateur/Decouvrir"
import Formulaire from "../Components/Simulateur/Formulaire"
import ProjectCard from "../Components/Simulateur/ProjectCard"
import Slide from "../Components/Simulateur/Slide"
import Devis from "../Components/Simulateur/Devis"
import TeamSection from "../Components/Simulateur/TeamSection"
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