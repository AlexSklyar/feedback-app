import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    let rating = 0;
    feedback.forEach(item=>rating=rating+item.rating)
    rating = (rating/feedback.length).toFixed(1).replace(/[.,]0$/,'')

return (
<div className="feedback-stats">
    <h4 style={{marginLeft: '40px'}}>{feedback.length} Rewiews</h4>
    <h4 style={{marginRight: '40px'}}>Average Rating: {isNaN(rating)? 0 : rating}</h4>
</div>
)
}

export default FeedbackStats
