const ProjectList = ({data}) => {
  return (
      <li className="timeline-event" data-aos="fade-up">
          <label className="timeline-event-icon"></label>
          <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">{data.period}</p>
              <div className="job-title">{data.title}</div>
              <div className="dash">{data.companyName}</div>
              <p>{data.workDescription}</p>
          </div>
      </li>
  )
}

export default ProjectList