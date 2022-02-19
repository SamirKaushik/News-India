import React, { useState } from "react";
import { useEffect } from "react";
import Item from "./news-card";
import { sample } from "./sampleData";
const News = ({ type }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const category = ["", "business", "entertainment", "health", "sports", "technology"];
    const apiKey="";
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
    if(type===6)
    return (
        <section>
            {sample.map((item, index) => item.urlToImage === null? "" : <Item data={item} key={index} />)}
        </section>
    );
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