import {Route, Routes, useLocation} from "react-router-dom";
import Main from "./Main/Main.jsx";
import Characters from "./Characters/Characters.jsx";
import Episodes from "./Episodes/Episodes.jsx";
import Character from "./Character/Character.jsx";
import { AnimatePresence } from "framer-motion"

function AnimaterRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/episodes" element={<Episodes/>}/>
            <Route path="/characters/:id" element={<Character/>}/>
        </Routes>
        </AnimatePresence>
    );
}

export default AnimaterRoutes;