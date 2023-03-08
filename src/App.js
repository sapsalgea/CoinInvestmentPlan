import { Outlet } from 'react-router-dom';
import './App.css';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <>
      <PageHeader></PageHeader>
      <Outlet/>
    </>
  );
}

export default App;
