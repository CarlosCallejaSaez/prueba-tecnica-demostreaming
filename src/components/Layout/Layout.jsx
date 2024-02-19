import React, { useContext } from 'react'; 
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AppContext } from '../../AppContext'; 

const Layout = () => {
  const { state } = useContext(AppContext); 
  
  
  if (state.loading) {
    return(
      <>
      <Header />
      <div>Loading...</div>
      <Footer />
      </>
    ) 
  }

  if (state.error) {
    return(
      <>
      <Header />
      <div>Oops, something went wrong</div>
      <Footer />
      </>)
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
