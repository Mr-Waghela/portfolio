import '../styles/About.css'
import { about } from '../data'

const About = () => {
  return (
        <div className="section about" id="about">
            <div className="container">
                <h1 className="title">{about.title}</h1>
                <div className=" d-flex flex-wrap">
                    <div className="about-wrap" data-aos="fade-up">
                      <h2 className="title-into" dangerouslySetInnerHTML={{ __html: about.intoText }} ></h2>
                        {about.description.map((desc,index) => (
                            <p className="abt-me-txt" dangerouslySetInnerHTML={{ __html: desc }} key={index}></p>
                        ))}
                    </div>
                    <div className="about-img-div d-flex flex-row-reverse">
                        <div className="about-border" data-aos="fade-up" data-aos-delay=".5"></div>
                        <div className="img-div" data-aos="fade-right">
                            {about.techIcon.map((icon,index)=>(
                                <p key={index}>{icon}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
  )
}

export default About