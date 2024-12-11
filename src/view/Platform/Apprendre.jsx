import Questions from "../../Components/Platform/Apprendre/Questions";
import YouTubePlaylist from "../../Components/Platform/Apprendre/apprendre";
import Header from "../../Components/Platform/headers/Header";
import Footer from "../../Components/Platform/footers/Footer";

export default function Apprendre() {
  return (
    <div>
      <Header />
      <YouTubePlaylist />
      <Questions />
      <Footer />
    </div>
  );
}
