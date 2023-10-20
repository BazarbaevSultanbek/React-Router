import './epsiodes.scss'
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
function Episodes() {
    return (
        <motion.div className="Episodes"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0,transition:{duration:0.1} }}>
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
        </motion.div>
    );
}
export default Episodes;