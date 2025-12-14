
import Login from "./Login"
import Signup from "./Signup"
import { Routes, Route } from "react-router-dom";


function App() {
 

  return (
    <>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>

    </>
  );
}

export default App
