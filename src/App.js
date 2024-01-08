// import React from 'react';
import {comments} from './commentData';

import Card from './Card';
// import './style.css';

//returning instance of Card component for every comment in commentData
//map over comments array with the arg named comment and return instance of Card component
//for each component, give it attribute commentObject and value {comment}
function App() {
  return (
    <div>
      {
        //passed down a commentObject attribute to Card which contains an object with three properties (profileImg, username, and comment)
        comments.map(comment =>
          <Card commentObject = {comment} />
          )
      }
    </div>
  )
}

export default App;
