import React from 'react';
import logo from './logo.svg';
import Hello from '../src/components/Hello'
import Helloani from '../src/components/Helloani'
import Instructors from '../src/components/Instructors'
import ToggleBox from '../src/components/ToggleBox'

import './App.css';

function App() {
  return (
    <div className="App">
     <Hello name="Ahmed" age="32" />
     <Helloani name="Ahmed" age="32" animals={['cats', 'dogs','fish']} />
    <ToggleBox title="Show Instructors">
        <Instructors />
      </ToggleBox>
    </div>
  );
}

export default App;
