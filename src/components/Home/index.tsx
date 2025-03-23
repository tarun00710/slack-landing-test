import Alert from "../Alert"
import CookieConsent from "../CookieBox"
import FloatingAlert from "../FloatingAlert"
import HeroSection from "../HeroSection"
import Navbar from "../Navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Alert/>
        <HeroSection/>
        <FloatingAlert />
        <CookieConsent />
    </div>
  )
}

export default Home