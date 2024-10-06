import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/about')}>About me</button>
        </div>
    );
}


export default Navbar;