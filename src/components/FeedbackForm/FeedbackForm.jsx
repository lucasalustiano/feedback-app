import { useState, useContext } from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';
import RatingSelect from '../RatingSelect/RatingSelect';
import FeedbackContext from '../../context/FeedbackContext/Feedback';

function FeedbackForm() {
  
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const { addFeedback } = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage(null)
    } else {
      setBtnDisabled(false)
      setBtnDisabled(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      }

      addFeedback(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;