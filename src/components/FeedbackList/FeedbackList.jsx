import FeedbackItem from '../FeedbackItem/FeedbackItem';

function FeedbackList({ feedbacksList, handleDelete }) {
  if (!feedbacksList || feedbacksList.lenght === 0) {
    return <p>No feedbacks yet!</p>
  }

  return (
    <div className='feedback-list'>
      {feedbacksList.map((item) => (
        <FeedbackItem key={item.id} item={item}  handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;