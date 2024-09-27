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
                    <li><a href="/day4exercise1/#about">About</a></li>
                    <li><a href="/day4exercise1/#work">Work</a></li>
                    <li><a href="/day4exercise1/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Index;