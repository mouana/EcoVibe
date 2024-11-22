import Header from '../components/headers/Header';
import SectionOne from '../components/home/SectionOne';
import SectionTwo from '../components/home/SectionTwo';
import SectionTh from '../components/home/SectionTh';
import SectionFour from '../components/home/SectionFour';
import SectionFive from '../components/home/SectionFive';
import SectionSe from '../components/home/SectionSe';
import Footer from '../components/footers/Footer';
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