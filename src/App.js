import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutPage from './pages/About/About';
import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import AboutIconLink from './components/AboutIconLink/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext/Feedback';

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className='container'>
          <Route exact path='/'>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>

          <Route path='/about' component={AboutPage} />
          
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
