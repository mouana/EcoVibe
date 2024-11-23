import Header from '../Components/headers/Header';
import ProjectsSection from '../Components/Experts/ProjectCards'
import ProjectCards from '../Components/Experts/ProjectsSection'
import SolutionsInnovantes from '../Components/Experts/SolutionsInnovantes'
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