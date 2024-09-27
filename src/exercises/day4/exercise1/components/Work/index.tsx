import { FC } from "react";
import Link from "../../assets/link.png";
import "./style.css";

interface Props {
    siteName: string;
    description : string;
}

const Index: FC<Props> = ({siteName, description}) => {
    return (
        <div id="work" className="work">
            <div className="work-left">
                <div className="work-up">
                 {siteName}
                 </div>
                 <div className="work-down">
                 {description}
                 </div>
            </div>
            <div className="work-right">
                <img src={Link}></img>
            </div>
        </div>
    );
}

export default Index;