import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0) return <p style={{textAlign: 'center'}}>No feedback yet</p>

    return(
        <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div 
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{display: 'none'}}
            >
            <FeedbackItem
            key={item.id}
            item={item} />
            </motion.div>
    ))}
    </AnimatePresence>
</div>
)

}



export default FeedbackList