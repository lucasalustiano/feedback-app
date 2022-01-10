import FeedbackItem from '../FeedbackItem/FeedbackItem';

function FeedbackList({ feedbacksList }) {
  if (!feedbacksList || feedbacksList.lenght === 0) {
    return <p>No feedbacks yet!</p>
  }

  return (
    <div className='feedback-list'>
      {feedbacksList.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;