import { FaSearch } from 'react-icons/fa';
import Card from './Card.jsx'
import {useState} from 'react'

function Header(props) {
  const [count, setCount] = useState(0); 
  return (
    <header className="header">
      <h1>My website!</h1>
      <nav className="nav">
        <ul>
          <li><a href="http://">Home</a></li>
          <li><a href="http://">About</a></li>
          <li><a href="http://">Services</a></li>
          <li><a href="http://">Contact</a></li>
          <li><button onClick={() => {props.setCards([...props.cards,<Card key={count}/>]);setCount(count + 1)}}>ADD</button></li>
        </ul>
        <span className="searchIcon">
          <FaSearch />
        </span>
      </nav>
    </header>
  );
}

export default Header;
