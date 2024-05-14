import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  const ListItem = ({ link, height, children }) => {
    height = height ? height : 'h-12';
    return (
      <li
        className={`${
          location.pathname === `${link}` ? 'secondary' : ''
        } ${height} font18 font-bold hover:secondary`}
      >
        <Link to={link}>{children}</Link>
      </li>
    );
  };

  return (
    <nav className="rounded-3xl bg-secondary bg-opacity-15">
      <div className="w-[220px] py-5 flex flex-col gap-5">
        <p className="flex h-20 items-center justify-center font24 font800">
          BOOKSPOILER
        </p>
        <ul className="ml-7">
          <ListItem link="/manager">회원 관리</ListItem>
          <li className="font18 font-bold">
            도서 관리
            <ul className="ml-5 list-disc">
              <ListItem link="/manager/booklist" height={'h-8'}>
                도서 리스트
              </ListItem>
              <ListItem link="/manager/bookcreate">도서 등록/수정</ListItem>
            </ul>
          </li>
          <ListItem link="/manager/challenge">챌린지 관리</ListItem>
          <ListItem link="/manager/comment">댓글 관리</ListItem>
        </ul>
      </div>
    </nav>
  );
};

export default AdminSidebar;
