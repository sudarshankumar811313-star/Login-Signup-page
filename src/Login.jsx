

import { Link } from "react-router-dom";
function Login(){
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-200 via-blue-200 to-indigo-200">
        <form className="w-95 bg-white/85 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">LOGIN</h2>
        
      <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
     <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>

       <button type="submit"  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>

      <p className="text-sm text-center mt-4">
        New user? <Link to="/signup" className="text-blue-600 hover:underline">Signup</Link>
      </p>
        </form>
        </div>
        </>
    );
}
export default Login;
