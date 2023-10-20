import { motion } from 'framer-motion';
import {Link} from "react-router-dom";
import './main.scss'

function Main() {
    return (
        <motion.div className="Main"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0,transition:{duration:0.1} }}>
            <h2>The Simpsons</h2>
            <div className="Main-pages">
                <Link to={"/characters"}><div className="Main-pages-characters">Characters</div></Link>
                <Link to={"/episodes"}><div className="Main-pages-episodes">Episodes</div></Link>
            </div>
        </motion.div>
    );
}

export default Main;