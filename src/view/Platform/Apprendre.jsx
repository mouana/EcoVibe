import Questions from "../../Components/Platform/Apprendre/Questions";
import YouTubePlaylist from "../../Components/Platform/Apprendre/apprendre";
import Header from "../../Components/Platform/headers/Header";
import AprendSec1 from '../../Components/Platform/Apprendre/AprendSec1'
import Footer from "../../Components/Platform/footers/Footer";

export default function Apprendre() {
  return (
    <div>
      <Header />
      <AprendSec1 />
      <YouTubePlaylist />
      <Questions />
      <Footer />
    </div>
  );
}
