import { FC, useState } from "react";
import HandBackground from "../../assets/hand-background.png";
import Hand from "../../assets/hand.png";
import "./style.css";

const Index: FC = () => {
    const [isWide, setIsWide] = useState(false);

    const toggleWidth = () => {
        setIsWide(!isWide);
    };

    return (
        <div className="right-menu-absolute">
            <div className="right-menu-relative">
                <div className="right-hand-container">
                    <div className="right-hand">
                        <img className="right-hand-background" src={HandBackground}></img>
                        <img className="right-hand-icon" src={Hand}></img>
                        <span className="right-hand-text">Hilmatrix</span>
                        <button onClick={toggleWidth}></button>
                    </div>
                </div>
                <div className={isWide ? 'right-menu-container open' : 'right-menu-container'}>
                    <div className="right-menu-close">
                        <button  onClick={toggleWidth}> X</button>
                    </div>
                    
                    <nav className="right-menu-nav">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="/day4exercise1/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="right-menu-social">
                        <nav>
                            <ul>
                            <li><a href="https://www.linkedin.com/in/hilmatrix/">LinkedIn</a></li>
                            <li><a href="https://www.twitter.com">Twitter</a></li>
                            <li><a href="https://www.instagram.com/hilmatrix">Instagram</a></li>
                            <li><a href="/day4exercise1/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;