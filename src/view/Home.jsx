import Header from '../Components/headers/Header';
import SectionOne from '../Components/home/SectionOne';
import SectionTwo from '../Components/home/SectionTwo';
import SectionTh from '../Components/home/SectionTh';
import SectionFour from '../Components/home/SectionFour';
import SectionFive from '../Components/home/SectionFive';
import SectionSe from '../Components/home/SectionSe';
import Footer from '../Components/footers/Footer';
export default function Home (){
    return (
        <div>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionTh />
            <SectionFour />
            <SectionFive />
            <SectionSe />
            <Footer />
        </div>
    )
}