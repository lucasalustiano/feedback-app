import Card from '../Card/Card';

function FeedbackItem({ item }) {
  return (
    <Card>
      <div classNmae='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;