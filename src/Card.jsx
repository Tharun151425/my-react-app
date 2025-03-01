import {useState} from 'react'
function Card(){
    const [isClicked, setIsClicked] = useState(false);
    function CardClick(){
        setIsClicked(true);
    }
    return (
        <div className={`card ${isClicked ? "clicked" : ""}`} onClick={CardClick}>
            <img src="https://i.pinimg.com/474x/45/d4/04/45d4046d5193f5ad919b735967db0161.jpg" alt="Profile Pic" />
            <h2>I'm Tharunkrishna M</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestias perferendis quae esse ipsam vel.</p>
        </div>
    );
}

export default Card;