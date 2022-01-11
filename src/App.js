import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutPage from './pages/About/About';
import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import AboutIconLink from './components/AboutIconLink/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext/Feedback';

import FeedbackData from './mock-data/data';

function App() {
  const [feedbackList, setFeedbackList] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbackList(feedbackList.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedbackList([newFeedback, ...feedbackList])
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className='container'>
          <Route exact path='/'>
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedbackList={feedbackList} />
            <FeedbackList feedbacksList={feedbackList} handleDelete={deleteFeedback} />
          </Route>

          <Route path='/about' component={AboutPage} />
          
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
