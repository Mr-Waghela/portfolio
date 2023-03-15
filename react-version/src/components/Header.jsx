import Loader from "../components/Loader"
import '../styles/Header.css'

const Header = () => {
  return (
    <>
        {/* <Loader/> */}
        <header className="navbar-fixed-top">
            <nav className="d-flex justify-content-between align-center">
                <div className="mobile-menu">
                    <div className="overlay">
                        <label htmlFor="toggle"></label>
                    </div>
                    <input type="checkbox" id="toggle" name="toggle"/>
                    <div className="verticalNav">
                        <a href="#about">About</a>
                        <a href="#experience">experience</a>
                        <a href="#projects">projects</a>
                        <a href="#contact">contact</a>
                    </div>
                </div>
                <div className="logo-wrap">
                    <a href="#contact" className="logo-trans"><span className="logo">CW</span></a>
                </div>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">experience</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header