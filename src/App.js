import { Outlet } from 'react-router-dom';
import './App.css';
import PageHeader from './components/PageHeader';
import Footer from './components/common/Footer';
import ScrollToTop from './components/scroll/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <PageHeader></PageHeader>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
