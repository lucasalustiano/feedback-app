import { useContext } from 'react';

import FeedbackItem from '../FeedbackItem/FeedbackItem';
import FeedbackContext from '../../context/FeedbackContext/Feedback';

function FeedbackList() {

  const { feedbackList } = useContext(FeedbackContext);

  if (!feedbackList || feedbackList.lenght === 0) {
    return <p>No feedbacks yet!</p>
  }

  return (
    <div className='feedback-list'>
      {feedbackList.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;