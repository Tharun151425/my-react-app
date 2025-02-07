import { FaSearch } from 'react-icons/fa';

function Header({ AddCard }) {
  return (
    <header className="header">
      <h1>My website!</h1>
      <nav className="nav">
        <ul>
          <li><a href="http://">Home</a></li>
          <li><a href="http://">About</a></li>
          <li><a href="http://">Services</a></li>
          <li><a href="http://">Contact</a></li>
        </ul>
        <span className="searchIcon">
          <FaSearch />
        </span>
        {/* <button onClick={AddCard}>Click to Add</button> */}
      </nav>
    </header>
  );
}

export default Header;
