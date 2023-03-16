import Loader from "../components/Loader"
import Header from "../components/Header"
import Banner from "../components/Banner"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      disable: 'mobile'
    });
  }, [])

  return (
    <>
        <Loader/>
        <Header/>
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home