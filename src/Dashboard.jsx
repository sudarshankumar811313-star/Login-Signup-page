import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Dashoard
        </h1>

        <p className="text-gray-600 mb-6">
          You have successfully logged in.
        </p>

        <button onClick={() => navigate("/")}   className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition" >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
