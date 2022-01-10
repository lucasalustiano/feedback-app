import { useState } from 'react';

import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackData from './mock-data/data';

function App() {
  const [feedbackList, setFeedbackList] = useState(FeedbackData);

  return (
    <>
      <Header/>
      <div className='container'>
        <FeedbackList feedbacksList={feedbackList} />
      </div>
    </>
  );
}

export default App;
