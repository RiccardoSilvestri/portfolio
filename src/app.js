import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Space from './components/background';

const App = () => {
  return (
    <Space>
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Space>
  );
};

export default App;