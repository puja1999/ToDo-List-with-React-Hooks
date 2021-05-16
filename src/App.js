import React from 'react';
import './App.css';
import ToDo from './components/ToDo';

const App = () => {
  return (
    <>
      <ToDo/>
    </>
  );
}
export default App;


// editing item onclicking edit buttton will be done in following steps:

// 1: get the id and name of the data which user clicked to edit
// 2: set the toggle mode to change the submit button into edit button
// 3: Now update the value of the setInput with the new updated value to edit.
// 4: To pass the current element Id to new state variable for reference