import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
          </Route>
          <Route exact path="/callback" element={<>Hello</>}/>
        </Routes>
    </Router>
  );
}

export default App;
