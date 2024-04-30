import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyPageSidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const hoveredItemStyle = (index) => ({
    color: hoveredItem === index ? '#1f2937' : '',
    backgroundColor: hoveredItem === index ? '#d1d5db' : '',
    fontWeight: hoveredItem === index ? 'bold' : '',
  });

  const ListItem = ({ index, link, children, color }) => {
    return (
      <Link to={link}>
        <li
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={`mypagesidebar-list-style text-${color}`}
          style={hoveredItemStyle(index)}
        >
          {hoveredItem === index && <span>&ensp;●&emsp;</span>}
          {children}
        </li>
      </Link>
    );
  };

  return (
    <nav className="w-[200px] h-[360px] flex justify-end text-xl">
      <ul className="flex flex-col justify-between">
        <li className="h-12 flex items-center font-bold text-2xl text-gray-800">
          마이페이지
        </li>

        <ListItem index={0} link="/mychallenge">
          내 챌린지
        </ListItem>

        <ListItem index={1} link="/mybookspoiler">
          내 스포일러
        </ListItem>

        <ListItem index={2} link="/mypaymentlist">
          결제내역
        </ListItem>

        <ListItem index={3} link="/myinfo">
          정보수정
        </ListItem>

        <ListItem index={4} link="/" color="gray-500">
          로그아웃
        </ListItem>

        <hr className="border border-solid" />
      </ul>
    </nav>
  );
};

export default MyPageSidebar;
