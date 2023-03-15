import '../styles/Projects.css'

const Projects = () => {
  return (
      <div className="section projects" id="projects">
          <div className="container">
              <div className="sec-title-wrap">
                  <h1 className="section-title">My Projects</h1>
              </div>
              <div className="main-container portfolio-inner">
                  <div className="portfolio-div">
                      <div className="portfolio">
                          <ul className="portfolio_container d-flex flex-wrap justify-content-around" data-aos="fade-up">
                              <li className="project-list">
                                  <a href="https://mr-waghela.github.io//PokeSearch/" className="portfolio_item" target="_blank" rel="noopener"> <img src="assets/img/projects/pokedex.png" alt="image" className="img-responsive" />
                                      <div className="portfolio_item_hover">
                                          <div className="portfolio-border">
                                              <div className="item_info"> <span className="project-title">PokeSearch</span> <span>Search your favourite Pokemon and learn more about them.</span> <em>HTML / CSS / Vanilla JS</em> </div>
                                          </div>
                                      </div>
                                  </a>
                              </li>
                              <li className="project-list">
                                  <a href="https://mr-waghela.github.io/breakout/" className="portfolio_item" target="_blank" rel="noopener"> <img src="assets/img/projects/breakout.png" alt="image" className="img-responsive" />
                                      <div className="portfolio_item_hover">
                                          <div className="portfolio-border">
                                              <div className="item_info"> <span className="project-title">Breakout game</span> <span>A ClassNameic Nostalgic desktop game </span> <em>HTML / CSS / Vanilla JS</em> </div>
                                          </div>
                                      </div>
                                  </a>
                              </li>
                              <li className="project-list">
                                  <a href="https://mr-waghela.github.io/dynamic-chart/" className="portfolio_item" target="_blank" rel="noopener"> <img src="assets/img/projects/dynamic-chart.png" alt="image" className="img-responsive" />
                                      <div className="portfolio_item_hover">
                                          <div className="portfolio-border">
                                              <div className="item_info"> <span className="project-title">Real time graph</span> <span>Live Stock price change of IBM share using API</span> <em>HTML / CSS / Chart.js</em> </div>
                                          </div>
                                      </div>
                                  </a>
                              </li>
                              <li className="project-list">
                                  <a href="https://mr-waghela.github.io/Web-quiz/" className="portfolio_item" target="_blank" rel="noopener"> <img src="assets/img/projects/web-quiz.png" alt="image" className="img-responsive" />
                                      <div className="portfolio_item_hover">
                                          <div className="portfolio-border">
                                              <div className="item_info"> <span className="project-title">Web Quiz</span> <span>Simple Web Quiz using VUE@3 cdn</span> <em>HTML / CSS / Vue.js</em> </div>
                                          </div>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Projects