import { FaTimes } from 'react-icons/fa';

import Card from '../Card/Card';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div classNmae='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;