import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';

import Card from '../Card/Card';
import FeedbackContext from '../../context/FeedbackContext/Feedback';

function FeedbackItem({ item }) {
  
  const { deleteFeedback } = useContext(FeedbackContext)
  
  return (
    <Card>
      <div classNmae='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;