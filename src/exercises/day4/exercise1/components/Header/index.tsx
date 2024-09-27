import { FC } from "react";
import "./style.css";

const Index: FC = () => {
    return (
        <header>
            <div className="name">
                @Ayush Barnwal
            </div>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Index;