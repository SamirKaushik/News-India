import React from "react";
import { useState } from "react";
import Nav from "./navbar"
import News from "./News"
import Footer from "./footer";
const App = () => {
    const [category, setCategory] = useState(0);
    const setType = (a) => {
        setCategory(a);
    }
    return (
        <div id="page-container">
            <div id="content-wrap">
                <Nav selectType={setType} underlined={category}></Nav>
                <News type={category}></News>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default App;