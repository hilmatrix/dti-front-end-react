import { FC } from "react";
import "./style.css";

const Index: FC = () => {
    return (
        <footer>
            <div className="footer-left">
                <span className="build-with">Build with by Hilmatrix (Hilman Mauludin)</span>
            </div>
            <div className="footer-right">
                <nav>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Webflow</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Index;