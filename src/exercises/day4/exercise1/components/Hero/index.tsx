import { FC } from "react";
import HeroImage from "../../assets/hero.png";
import "./style.css";

const Index: FC = () => {
    return (
        <div className="hero">
            <img src={HeroImage}></img>
        </div>
    );
}

export default Index;