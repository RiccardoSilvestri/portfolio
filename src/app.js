import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Space from './components/background';

const App = () => {
  return (
    <div className="relative z-10">
      <Space>
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </Space>
    </div>
  );
};

export default App;