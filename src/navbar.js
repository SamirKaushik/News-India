import React, { useState } from "react";
import { useEffect } from "react";
import { FaBars } from 'react-icons/fa';
const Nav = ({ selectType, underlined }) => {
        const [toggle, setToggle] = useState(0);
        useEffect(() => {
                const buttons = document.getElementById("categories").children;
                for (let i = 0; i < buttons.length; i++) {
                        buttons[i].classList.remove("active");
                        if (i === underlined)
                                buttons[i].classList.add("active");
                }
        }, [underlined]);
        useEffect(() => {
                const toggle = document.getElementById("toggle");
                toggle.onclick = () => {
                        if (toggle.checked === true) {
                                setToggle(1);
                                document.querySelector("label").style.transform = "rotateZ(180deg)";
                                document.getElementById("categories").style.height = "271px"
                        }
                        else {
                                setToggle(0);
                                document.querySelector("label").style.transform = "rotateZ(-180deg)";
                                document.getElementById("categories").style.height = "0px";
                        }
                }
                if (window.innerWidth <= 720) {
                        const buttons = document.querySelectorAll("#categories button");
                        for (var i = 0; i < buttons.length; i++) {
                                buttons[i].onclick = () => {
                                        toggle.click();
                                }
                        }
                }
        }, [toggle])
        return (
                <nav>
                        <div className="title">
                                <h1>News India</h1>
                                <div id="underline"></div>
                        </div>
                        <label htmlFor="toggle"> <FaBars/> </label>
                        <input type="checkbox" name="toggle" id="toggle" />
                        <div id="categories">
                                <button type="button" onClick={() => { selectType(0) }}>All</button>
                                <button type="button" onClick={() => { selectType(1) }}>Business</button>
                                <button type="button" onClick={() => { selectType(2) }}>Entertainment</button>
                                <button type="button" onClick={() => { selectType(3) }}>Health</button>
                                <button type="button" onClick={() => { selectType(4) }}>Science</button>
                                <button type="button" onClick={() => { selectType(5) }}>Sports</button>
                                <button type="button" onClick={() => { selectType(6) }}>Technology</button>
                        </div>
                </nav>
        );
}
export default Nav;