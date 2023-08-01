// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineItems = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectItem={item} />
    }
    return <CourseTimelineCard key={item.id} courseItem={item} />
  }

  return (
    <div className="chrono-container">
      <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each => renderTimelineItems(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
