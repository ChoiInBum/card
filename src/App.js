import React, {useState} from 'react';
import './App.css';
import Card from './Card';

const cardsDate = [
  {id:1, name:'홍길동', age:28, profession:'Engineer'},
  {id:2, name:'김철수', age:25, profession:'Developer'},
  {id:3, name:'Tom', age:30, profession:'Teacher'},
  {id:4, name:'Alice', age:31, profession:'Soldier'},
];

function App() {
  const [showOlder, setShowOlder] = useState(false);

  const filteredCards= showOlder
    ? cardsData.filter(card => card.age > 30)
    : cardsData;

  return (
    <div className="App">
      <h1>Information Card</h1>
      <button onClick={()=> setShowOlder(!showOlder)}>
        {showOlder ? 'Show All' : 'Show Older Than 30'}
      </button>
      <div className="card-container">
        {filteredCards.map(card => (          
          <Card/>
        ))}
      </div>
    </div>
  );
}

export default App;
