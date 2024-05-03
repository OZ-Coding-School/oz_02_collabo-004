import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  const ListItem = ({ link, height, children }) => {
    height = height ? height : 'h-12';
    return (
      <li
        className={`${
          location.pathname === `${link}` ? 'text-blue-700' : ''
        } ${height} font18 pl-1 font-bold`}
      >
        <Link to={link}>{children}</Link>
      </li>
    );
  };

  return (
    <nav className="w-[200px] h-full border-2 border-black rounded-3xl">
      <div>
        <p className="flex items-center justify-center font24 h-14 font-extrabold">
          BOOKSPOILER
        </p>
        <ul className="ml-5">
          <ListItem link="/admin">회원 관리</ListItem>
          <li className="font18 pl-1 font-bold">
            도서 관리
            <ul className="ml-5 list-disc">
              <ListItem link="/admin/booklist" height={'h-8'}>
                도서 리스트
              </ListItem>
              <ListItem link="/admin/bookcreate">도서 등록/수정</ListItem>
            </ul>
          </li>
          <ListItem link="/admin/challenge">챌린지 관리</ListItem>
          <ListItem link="/admin/comment">댓글 관리</ListItem>
        </ul>
      </div>
    </nav>
  );
};

export default AdminSidebar;
