import Header from './Header.jsx'
import Card from './Card.jsx'
import { useState,useEffect } from 'react'
function App() {
  const [cards,setCards] = useState([<Card/>]);

  return (<>
    <div>
    <Header setCards={setCards} cards={cards}/>
    </div>
    <div className="card_container">
    {cards.map((card,index) => (<Card key={index} />))}
    </div>
    </>
  );
}

export default App