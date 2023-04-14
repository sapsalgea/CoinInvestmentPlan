import { Outlet } from 'react-router-dom';
import './App.css';
import PageHeader from './components/PageHeader';
import Footer from './components/common/Footer';
import ScrollToTop from './components/scroll/ScrollToTop';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <ScrollToTop/>
      <PageHeader></PageHeader>
      <div className="flex-1 m-0 p-0">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
