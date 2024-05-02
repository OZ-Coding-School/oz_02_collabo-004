import { Outlet } from 'react-router-dom';
import AdminHeader from '../@common/Header/AdminHeader';
import AdminFooter from '../@common/Footer/AdminFooter';

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
