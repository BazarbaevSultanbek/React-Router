import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
// import Characters from "./pages/Characters/Characters.jsx";
// import Episodes from "./pages/Episodes/Episodes.jsx";
// import Main from "./pages/Main/Main.jsx";
// import Character from "./pages/Character/Character.jsx";
import AnimaterRoutes from "./pages/AnimaterRoutes.jsx";
function App() {


  return (
          <Router>
              <AnimaterRoutes />
          </Router>
  )
}

export default App
