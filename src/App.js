import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card.js';

function App() {
  const [days, setDays] = useState([]);
  
  const url = "https://raw.githubusercontent.com/Ahmedsaed/100-days-of-code/main/Round1.md"

  useEffect(() => {
    console.log('App.js');
    fetch(url)
      .then( r => r.text() )
      .then( t => {
        t = t.split('## Code Log')[1];
        t = t.split(/(?=###)/g).slice(2);
        for (let i = 0; i < t.length; i++) {
          setDays(days => [...days, <Card key={i} content={t[i]}></Card>]);
        }
      })
  }, []);

  return (
    <div className="App">
      <h1 className='App-header'>
        <p className='App-header-text'>100DaysOfCode Log</p>
      </h1>
      <div className="log">
        <h1 className="log-header">Round 1</h1>
        <div className="log-cards">
          {days}
        </div>
      </div>
    </div>
  );
}

export default App;
