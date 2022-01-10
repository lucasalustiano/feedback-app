function FeedbackStats({ feedbackList }) {
  let average = feedbackList.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedbackList.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedbackList.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;