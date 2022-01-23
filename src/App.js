import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Forum from "./Forum";

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/callback" element={<Navigate replace to="/forum" />} />        
          </Routes>
    </Router>
  );
}

export default App;
