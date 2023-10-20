import './App.css'
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
// import Characters from "./pages/Characters/Characters.jsx";
// import Episodes from "./pages/Episodes/Episodes.jsx";
// import Main from "./pages/Main/Main.jsx";
// import Character from "./pages/Character/Character.jsx";
import AnimaterRoutes from "./pages/AnimaterRoutes.jsx";
=======
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Episodes from "./pages/Episodes/Episodes.jsx";
import Main from "./pages/Main/Main.jsx";
import Character from "./pages/Character/Character.jsx";
>>>>>>> db509e1aef323e56a00400905857459f53cc6bd5
function App() {


  return (
<<<<<<< HEAD
          <Router>
              <AnimaterRoutes />
          </Router>
=======
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/characters" element={<Characters/>}/>
              <Route path="/episodes" element={<Episodes/>}/>
              <Route path="/characters/:id" element={<Character />}/>
          </Routes>
    </BrowserRouter>
>>>>>>> db509e1aef323e56a00400905857459f53cc6bd5
  )
}

export default App
