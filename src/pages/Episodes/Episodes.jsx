import React from 'react';
import './epsiodes.scss'
import {Link} from "react-router-dom";
function Episodes() {
    return (
        <div className="Episodes">
            <Link to={"/"}><div className="Episodes-back">back</div></Link>
            <h2>Episodes</h2>
            <div className="Episodes-all">
                <div>Homer Simpson</div>
                <div>Marge Simpson</div>
                <div>Bart Simpson</div>
                <div>Lisa Simpson</div>
                <div>Maggie Simpson</div>
                <div>Ned Flanders</div>
                <div>Maude Flanders</div>
                <div>Charles Montgomery Burns</div>
                <div>Waylon Smithers</div>
            </div>
        </div>
    );
}

export default Episodes;