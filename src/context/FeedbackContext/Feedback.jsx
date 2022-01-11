import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      text: 'Test context item 1',
      rating: 8,
    },
    {
      id: 2,
      text: 'Test context item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'Test context item 3',
      rating: 10,
    },
  ])

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedbackList([newFeedback, ...feedbackList])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbackList(feedbackList.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider
      value={{ 
        feedbackList,
        addFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;