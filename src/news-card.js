import React from "react";
const Item = ({ data }) => {
    return (<a href={data.url} target="_blank">
        <div className="news-item">
            <img src={data.urlToImage} alt={data.title} className="news-img" />
            <div className="news-data">
                <div className="news-title">{data.title}</div>
                <p className="news">{data.description}</p>
                <div className="source">{data.source.name}</div>
            </div>
        </div></a>
    );
};
export default Item;