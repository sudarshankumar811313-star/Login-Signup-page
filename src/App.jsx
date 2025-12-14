
import Dashboard from "./Dashboard";
import Login from "./Login"
import Signup from "./Signup"
import { Routes, Route } from "react-router-dom";


function App() {
 

  return (
    <>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>

    </>
  );
}

export default App
