import React from 'react';
import "./characters.scss";
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

function Characters() { // Destructure the 'show' prop here
    return (
        <div className="Characters">

            <Link to={"/"}><div className="Characters-back">back</div></Link>
            <h2>Characters</h2>

            <div className="Characters-all">
                        <Link to={"/characters/1"}><div>Homer Simpson</div></Link>
                        <Link to={"/characters/2"}><div>Marge Simpson</div></Link>
                        <Link to={"/characters/3"}><div>Bart Simpson</div></Link>
                        <Link to={"/characters/4"}><div>Lisa Simpson</div></Link>
                        <Link to={"/characters/5"}><div>Maggie Simpson</div></Link>
                        <Link to={"/characters/6"}><div>Ned Flanders</div></Link>
                        <Link to={"/characters/7"}><div>Maude Flanders</div></Link>
                        <Link to={"/characters/8"}><div>Charles Montgomery Burns</div></Link>
                        <Link to={"/characters/9"}><div>Waylon Smithers</div></Link>
            </div>

        </div>
    );
}

export default Characters;