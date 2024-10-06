import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;