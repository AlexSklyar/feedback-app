import React from 'react'
import {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setbtnDisabled] = useState(true)
const [message, setMessage] = useState('')

useEffect(()=>{
    if(feedbackEdit.edit === true){
    setbtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
    }
},[feedbackEdit])

const handleTextChange = e =>{
    if(!text){
        setbtnDisabled(true)
        setMessage(null)
    }else if(text!=='' && text.trim().length<9){
        setbtnDisabled(true)
        setMessage('Text must be at least 10 characters') 
    } else{
        setMessage(null)
        setbtnDisabled(false)
    }
    setText(e.target.value)
}

const submitHandler = e => {
    e.preventDefault()
    if(text.trim().length>=10){
        const newFeedback = {
            text,
            rating,
        }
        if(feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
            feedbackEdit.edit =false
        } else {
            addFeedback(newFeedback)
        }
        setText('')
        setbtnDisabled(true)
    }
}

return (
    <Card>
        <h2>How would your rate your service with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <form onSubmit={submitHandler} className="input-group">        
                <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder='Whrite a review' 
                value={text}
                />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>  
        </form>
        {message && <div className='message'>{message}</div>}
    </Card>
    
    )
    }
    
    export default FeedbackForm

// return (
// <Card>

// <form onSubmit={submitHandler}>
//     <h2>How would your rate your service with us?</h2>
// <RatingSelect select={(rating)=>setRating(rating)}/>
//     <div className="input-group">
//         <input 
//         onChange={handleTextChange} 
//         type="text" 
//         placeholder='Whrite a review' 
//         value={text}
//         />
//         <Button type="submit" isDisabled={btnDisabled} >Send</Button>
//     </div>

//     {message && <div className='message'>{message}</div>}
// </form>

// </Card>

// )
// }

// export default FeedbackForm
