import { useNavigate } from 'react-router-dom';
import '../styles/index.css'
function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center space-x-4 p-6">
            <button 
                onClick={() => navigate('/')} 
                className="bg-indigo-900 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-indigo-400"
            >
                Return Home
            </button>
            <button 
                onClick={() => navigate('/about')} 
                className="bg-teal-900 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-teal-400"
            >
                About Me
            </button>
            <button 
                onClick={() => navigate('/contact')} 
                className="bg-purple-900 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-purple-400"
            >
                Contact Me
            </button>
        </div>
    );
}

export default Navbar;
