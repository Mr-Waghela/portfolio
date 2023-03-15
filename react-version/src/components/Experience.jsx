import '../styles/Experience.css'
const Experience = () => {
  return (
      <div className="section" id="experience">
          <div className="container">
              <div className="sec-title-wrap">
                  <h1 className="section-title">My Experience</h1>
              </div>
              <div className="d-flex flex-wrap">
                  <div className="timeline-wrap">
                      <ul className="timeline">
                          <li className="timeline-event" data-aos="fade-up">
                              <label className="timeline-event-icon"></label>
                              <div className="timeline-event-copy">
                                  <p className="timeline-event-thumbnail">January 2019 - Present</p>
                                  <div className="job-title">UI Developer</div>
                                  <div className="dash">Media.net</div>
                                  <p>
                                      Worked closely and interacting with Business Developers to roll out daily tasks.   Coaching and mentoring junior developers while regularly overseeing delivery of projects. Responsible for the development of multiple mobile responsive websites using Wordpress. Working with premium clients to roll out new features and requirement on weekly basis using technology as Vue.js , SCSS, Tailwind, Blade on Wordpress CMS.
                                  </p>
                              </div>
                          </li>
                          <li className="timeline-event" data-aos="fade-up" data-aos-delay=".2">
                              <label className="timeline-event-icon"></label>
                              <div className="timeline-event-copy">
                                  <p className="timeline-event-thumbnail">October 2018 - December 2018</p>
                                  <div className="job-title">Frontend Developer</div>
                                  <div className="dash">Nevon Solutions</div>
                                  <p>
                                      Worked and delivered multiple projects using HTML/CSS templates embedding with ASP.net .
                                  </p>
                              </div>
                          </li>
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