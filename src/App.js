import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forum from "./Forum";

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route exact path="/forum" element={<Forum/>}/>
        </Routes>
    </Router>
  );
}

export default App;
