import React, { useState } from "react";
import { useEffect } from "react";
import Item from "./news-card";
const News = ({ type }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const category = ["", "business", "entertainment", "health", "science", "sports", "technology"];
    const apiKey="bd96f791721640efb0c41bfe0da6e2c7";
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category[type]}&apiKey=${apiKey}`;
    
    useEffect(() => {
        setItems([])
        setLoading(true)
        setError(null)
        fetch(url).then(response => {
            if (response.ok)
                return response.json();
            throw response;
        }).then(data => {
            setItems(data.articles);
            setLoading(false);
        }).catch(error=>{setError(error)})
    },[type]);
    if (error)
        return (
            <section>
                <h1 id="error">Error Fetching News!!</h1>
            </section>
        );

    if (loading)
        return (
            <section>
                <h1 id="loading">Loading...</h1>
            </section>
        );
    return (
        <section>
            {items.map((item, index) => item.urlToImage === null? "" : <Item data={item} key={index} />)}
        </section>
    );
}
export default News;
// 9fccc872747f43e4b3ec7402ca1abb4a
// bd96f791721640efb0c41bfe0da6e2c7
// 2aae928708d4463ebab72eb1498bf4aa