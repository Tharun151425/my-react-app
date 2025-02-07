import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

function App() {
  // const [cards, setCards] = useState([<Card key={1} />]);
  // const addCard = () => {
  //   setCards([...cards, <Card key={cards.length + 1} />]);
  // };
  return (
    <>
    <Header/>
    <Card/>
    <Footer/>
    </>
  );
}

export default App