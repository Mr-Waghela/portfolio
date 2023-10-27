import "../styles/Projects.css";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="section projects" id="projects">
      <div className="container">
        <div className="sec-title-wrap">
          <h1 className="section-title">{projects.title}</h1>
        </div>
        <div className="main-container portfolio-inner">
          <div className="portfolio-div">
            <div className="portfolio">
              <ul
                className="portfolio_container d-flex flex-wrap justify-content-around"
                data-aos="fade-up"
              >
                {projects.project.map((list, index) => (
                  <li className="project-list" key={index}>
                    <a
                      href={list.url}
                      className="portfolio_item"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {" "}
                      <img
                        src={list.img}
                        alt="product"
                        className="img-responsive"
                      />
                      <div className="portfolio_item_hover">
                        <div className="portfolio-border">
                          <div className="item_info">
                            <span className="project-title">{list.name}</span>
                            <span>{list.desc}</span>
                            <em>{list.tech}</em>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
