import "./Card.css";
import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from 'react';

export default function Card({ content }) {
    const [imgs, setImgs] = useState([]);

    if (content && content.includes('<a')) {
        let aTags = content.split('<a');
        content = aTags[0] + aTags[1].split('>')[1];
    } 
    
    let imgTags;
    if (content && content.includes('<img')) {
        imgTags = content.split('<img');
        content = content.split('<img')[0];
    }
    
    useEffect(() => {
        if (imgTags) {
            for (let i = 1; i < imgTags.length; i++) {
                let imgSrc = imgTags[i].split('>')[0].split('src=')[1].split('"')[1];
                setImgs(imgs => [
                    ...imgs, 
                    <img key={i} className="card-img" src={imgSrc} alt=""/>
                ]);
                console.log(i);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="card-body">
            <ReactMarkdown>{content}</ReactMarkdown>
            <div className="card-img-container">
                {imgs}
            </div>
        </div>
    )
}