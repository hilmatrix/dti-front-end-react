import { FC } from "react";
import HandBackground from "../../assets/hand-background.png";
import Hand from "../../assets/hand.png";
import "./style.css";

const Index: FC = () => {
    return (
        <div className="right-menu-absolute">
            <div className="right-menu-relative">
                <div className="right-menu">
                    <div className="right-hand">
                        <img className="right-hand-background" src={HandBackground}></img>
                        <img className="right-hand-icon" src={Hand}></img>
                        <span className="right-hand-text">Hilmatrix</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;