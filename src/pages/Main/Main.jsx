import React from 'react';
import {Link} from "react-router-dom";
import './main.scss'

function Main() {
    return (
        <div className="Main">
            <h2>The Simpsons</h2>
            <div className="Main-pages">
                <Link to={"/characters"}><div className="Main-pages-characters">Characters</div></Link>
                <Link to={"/episodes"}><div className="Main-pages-episodes">Episodes</div></Link>
            </div>
        </div>
    );
}

export default Main;