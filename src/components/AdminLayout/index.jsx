import { Outlet } from 'react-router-dom';
import AdminHeader from '../@common/Header/AdminHeader';
import Footer from '../@common/Footer/Footer';
import AdminSidebar from '../@common/AdminSidebar';

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <div className="w-full flex justify-center pt-[120px]">
        <div className="w-[1080px] flex justify-between">
          <AdminSidebar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
