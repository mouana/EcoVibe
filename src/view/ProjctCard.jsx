import Header from '../Components/headers/Header';
import ProjectsSection from '../Components/ProejectCard/ProjectCards'
import ProjectCards from '../Components/ProejectCard/ProjectsSection'
import SolutionsInnovantes from '../Components/ProejectCard/SolutionsInnovantes'
import Footer from '../Components/footers/Footer';

export default function ProjctCard(){
    return(
        <>
        <Header />
        <ProjectCards />
        <ProjectsSection />
        <SolutionsInnovantes />
        <Footer />
        </>
    )
}