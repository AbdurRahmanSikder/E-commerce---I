import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';

function App() {

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: 'include'
    });

    const dataApi = await dataResponse.json();

    console.log("data-user ", dataApi);
  }

  useEffect(() => {
    fetchUserDetails();
  }, [])

  return (
    <>
      <ToastContainer />
      <Header />
      <main className='min-h-[calc(100vh-140px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
