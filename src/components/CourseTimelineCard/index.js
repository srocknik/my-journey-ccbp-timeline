// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseItem} = props
  const {courseTitle, duration, description, tagsList} = courseItem

  return (
    <div className="course-list-container">
      <div className="course-card-header">
        <h1 className="course-card-title">{courseTitle}</h1>
        <div className="course-card-side-header-container">
          <AiFillClockCircle />
          <p className="course-card-duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tag-list-container">
        {tagsList.map(each => (
          <li key={each.id} className="tag-list-item-container">
            <p className="course-tags">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
