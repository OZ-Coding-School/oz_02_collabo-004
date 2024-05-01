import { Link } from 'react-router-dom';
import BookImage from '../../assets/images/bookimage.jpg';

const Merchandise = () => {
  return (
    <div className="flex items-center gap-x-10 justify-around">
      <Link to="/bookspoilerdetail" className="flex items-center gap-x-10">
        <img src={BookImage} className="w-20" />
        <p className="flex-1 font-medium">상품명: 사람을 좋아하는 헤드헌터</p>
      </Link>
      <p className="font-medium">1개</p>
      <p className="font-medium">1,000원</p>
    </div>
  );
};

export default Merchandise;
