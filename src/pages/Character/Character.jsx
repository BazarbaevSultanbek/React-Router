import {useRef, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import "./character.scss";
import json from "../character.json"
import { motion } from 'framer-motion';
function Character() {
    const location = useParams();
    const [id,setId] = useState(+location.id);
    const transitionRef = useRef(null);

    return (
        <motion.div className="Character"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0,transition:{duration:0.1} }}>
                <Link to="/characters">
                    <div ref={transitionRef} className="Character-back">back</div>
                </Link>
            <h2>Character</h2>
            <div className="Character-menu">
                {
                    json.map((item)=>{
                        if(item.id === id){

                            return (
                                <div key={item.id}>
                                    <h3>{item.name}</h3>
                                    <p>{item.text}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </motion.div>
    );
}

export default Character;