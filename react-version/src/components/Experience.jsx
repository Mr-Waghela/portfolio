import '../styles/Experience.css'
import { experience } from '../data'
import ProjectList from './ProjectList'

const Experience = () => {
  return (
      <div className="section" id="experience">
          <div className="container">
              <div className="sec-title-wrap">
                  <h1 className="section-title">{experience.title}</h1>
              </div>
              <div className="d-flex flex-wrap">
                  <div className="timeline-wrap">
                      <ul className="timeline">
                        {experience.timeline.map((exp,index) => (
                            <ProjectList data={exp} key={index} />
                        ))}
                      </ul>
                  </div>
                  <div className="growth-img">
                      <img src="assets/img/growth.svg" width="400" className="img-responsive gw-img" alt="" align="right" data-aos="fade-right" data-aos-delay="0" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Experience