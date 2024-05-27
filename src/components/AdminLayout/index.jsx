import { Outlet } from 'react-router-dom';
import AdminHeader from '../@common/Header/AdminHeader';
import Footer from '../@common/Footer/Footer';
import AdminSidebar from '../@common/AdminSidebar';

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <div className="flex justify-center">
        <div className="md flex justify-between pt-[120px] pb-[80px]">
          <div className="h-full">
            <AdminSidebar />
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
