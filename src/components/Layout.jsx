import { Outlet } from 'react-router-dom';
// import Header from './@common/Header/index';
import Footer from './@common/Footer'

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
