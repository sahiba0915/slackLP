import './App.css'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Companies from "./components/Companies"
import VideoSection from "./components/VideoSection"
import Message from "./components/Message"

function App() {

  return (
   <div>
    <Navbar/>
    <HeroSection />
    <Companies/>
    <VideoSection/>
    <Message/>
   </div>
  )
}

export default App
