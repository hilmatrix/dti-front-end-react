import { FC } from "react";
import "./style.css";

const Index: FC = () => {
    return (
        <footer>
            <div className="footer-left">
                <div className="footer-left-up">
                    <span className="title">Have something in mind ?<br></br> Let's build it together</span>
                </div>
                <div className="footer-left-down">
                    <span className="build-with">Build with by Hilmatrix (Hilman Mauludin)</span>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right-up">
                    <button>Get In touch</button>
                </div>
                <div className="footer-right-down">
                    <nav>
                        <ul>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Webflow</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Index;