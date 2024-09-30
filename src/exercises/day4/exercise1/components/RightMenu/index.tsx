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
                    <button onClick={toggleWidth}> X</button>
                </div>
            </div>
        </div>
    );
}

export default Index;