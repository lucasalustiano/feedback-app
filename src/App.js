import { useState } from 'react';

import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackData from './mock-data/data';

function App() {
  const [feedbackList, setFeedbackList] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbackList(feedbackList.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header/>
      <div className='container'>
        <FeedbackList feedbacksList={feedbackList} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
