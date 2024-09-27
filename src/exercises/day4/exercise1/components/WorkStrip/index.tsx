import { FC } from "react";
import "./style.css";

interface Props {
    images: string[];
}

const Index: FC<Props> = ({images}) => {
    const arrayOfImages = [];

    for (let loop=0; loop < images.length; loop++) {
        arrayOfImages.push(<img src={images[loop]}/>);
    }
    
    return (
        <div className="work-strip">
            {arrayOfImages}
        </div>
    );
}


export default Index;