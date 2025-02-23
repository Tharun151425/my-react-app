import Header from './Header.jsx'
import Card from './Card.jsx'
import { useState,useEffect } from 'react'
function App() {
  const [cards,setCards] = useState([<Card key={0} />]);
  useEffect(()=>{
    console.log(cards);
  },[cards]);

  const removeCard = (Remove_this_key) =>{
    cards.forEach((card,index) => {
      if (card.key === Remove_this_key){
        cards.splice(index,1);
        return;
      }
    })
  }
  return (<>
    <div>
    <Header setCards={setCards} cards={cards}/>
    </div>
    <div className="card_container">
    {cards.map((card,index) => (<Card key={index + 1} />))}
    </div>
    </>
  );
}

export default App