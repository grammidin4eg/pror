import React from 'react';
import {firebase_app} from './data/firebase';

function App() {
  console.log('!!! app', firebase_app);
  return (
    <div>
      APP
      {process.env.REACT_APP_FIREBASE_API_KEY}
    </div>
  );
}

export default App;
