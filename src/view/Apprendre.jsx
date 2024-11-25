import Questions from '../Components/Apprendre/Questions'
import YouTubePlaylist from '../Components/Apprendre/apprendre'
import Header from '../Components/headers/Header'
import Footer from '../Components/footers/Footer'

export default function Apprendre() {
    return (
        <div>
            <Header />
            <YouTubePlaylist />
            <Questions />
            <Footer />
        </div>
    )
}