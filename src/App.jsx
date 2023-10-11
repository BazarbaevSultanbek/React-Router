import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Episodes from "./pages/Episodes/Episodes.jsx";
import Main from "./pages/Main/Main.jsx";
import Character from "./pages/Character/Character.jsx";
function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/characters" element={<Characters/>}/>
              <Route path="/episodes" element={<Episodes/>}/>
              <Route path="/characters/:id" element={<Character />}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App
