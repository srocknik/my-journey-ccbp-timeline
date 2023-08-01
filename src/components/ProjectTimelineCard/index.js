// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectItem} = props
  const {
    projectTitle,
    imageUrl,
    duration,
    description,
    projectUrl,
  } = projectItem

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project img" className="project-image" />
      <div className="project-bottom-header-container">
        <h1 className="project-header-heading">{projectTitle}</h1>
        <div className="bottom-side-container">
          <AiFillCalendar className="calender-icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
