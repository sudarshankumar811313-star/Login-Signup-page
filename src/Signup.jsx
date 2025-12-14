import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    alert("Signup successful!");
    navigate("/");
  }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-200 via-blue-200 to-indigo-200">
   

    <form className="w-95 bg-white/85 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">SIGNUP</h2>
     <input type="email"  placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none" onChange={(e) => setEmail(e.target.value)}/>

   <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"  onChange={(e) => setPassword(e.target.value)}/>

   <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition" onClick={handleSignup}>Signup</button>

      <p className="text-sm text-center mt-4">
        Already have an account? <Link to="/" className="text-purple-600 hover:underline">Login</Link>
      </p>
      </form>
      </div>
    </>
  );
}

export default Signup;