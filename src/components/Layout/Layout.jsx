import React, { useContext } from 'react'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AppContext } from '../../AppContext'; 
import BodyContent from '../BodyContent/BodyContent'; 

const Layout = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Header />
     
        <BodyContent isLoading={state.loading} isError={state.error} />
      
      <Footer />
    </>
  );
};

export default Layout;