import React, { useContext } from 'react'; 
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AppContext } from '../../AppContext'; 
import TopBar from '../TopBar/TopBar';

const Layout = () => {
  const { state } = useContext(AppContext); 
  
  
  if (state.loading) {
    return(
      <>
      <Header />
      <TopBar title="Popular Titles" />
      <div style={{margin:"50px"}}>Loading...</div>
      <Footer />
      </>
    ) 
  }

  if (state.error) {
    return(
      <>
      <Header />
      <TopBar title="Popular Titles" />
      <div style={{margin:"50px"}}>Oops, something went wrong</div>
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
