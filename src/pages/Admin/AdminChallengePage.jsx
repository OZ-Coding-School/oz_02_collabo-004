import { useRef, useState } from 'react';
import arrow_down_fill from '../../assets/images/icons/arrow_down_fill.svg'
import useOnClickOutside from '../../hooks/useOnClickOutside';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import AdminChallengeSpoiler from '../../components/AdminChallengeSpoiler';

const AdminChallengePage = ({
  bookId,
  challengeSpoilerId,
}) => {
  const { id } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectListItem, setSelectListItem] = useState('');
  const [bookPrice, setBookPrice] = useState('');

  const dropdownRef = useRef(null); 

  let response = {
    data: [
      {id:"1", day:1, title:"1일차 스포일러 제목", content:"1일차 스포일러 내용", challenge_info_id:1},
      {id:"2", day:2, title:"2일차 스포일러 제목", content:"2일차 스포일러 내용", challenge_info_id:2},
      {id:"3", day:3, title:"3일차 스포일러 제목", content:"3일차 스포일러 내용", challenge_info_id:3},
      {id:"4", day:4, title:"4일차 스포일러 제목", content:"4일차 스포일러 내용", challenge_info_id:4},
      {id:"5", day:5, title:"5일차 스포일러 제목", content:"5일차 스포일러 내용", challenge_info_id:5},
      {id:"6", day:6, title:"완주 스포일러 제목", content:"6일차 스포일러 내용", challenge_info_id:6},
    ],
    ok: true
  };
  const { data: challengeSpoiler, setData: setChallengeSpoiler } = useFetch(`/book/${bookId}/challenge_spoiler/list`, response);

  let response2 = {
    data: [
      {
        id:"1",
        name:"인스타브레인",
      },
      {
        id:"2",
        name:"뇌, 과학의 비밀을 풀다",
      }
    ],
    ok: true
  };
  const { data: bookList } = useFetch(`/books`, response2);

  useOnClickOutside(dropdownRef, () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  });

  const handleListItemClick = (item) => {
    setSelectListItem(item);
    setShowDropdown(false); 
    // setSelectListItem(book.name);
    // setBookId(book.id);
    // setShowDropdown(false);
  };

  const handleInputChange = (e) => {
    setSelectListItem(e.target.value);
  };

  const handleBookPriceChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setBookPrice(value);
    }
  };

  return (
    <div className="flex">
      <div className="w-[800px]">
        <div className="flex flex-col gap-12">
          <div className='flex flex-col gap-10'>
            <div className="flex">
              <p className="font30 font800 textHighlight">
                챌린지 책 정보 선택
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <p className="font18 font800">책 제목</p>
                <div>
                  <div className='flex relative items-center' ref={dropdownRef}>
                    <input 
                      type="text" 
                      className="w-[300px] font16 border gray8 border-gray8 rounded-sm p-1"
                      value={selectListItem}
                      onChange={handleInputChange}
                      readOnly
                    />
                    <img 
                      src={arrow_down_fill} 
                      className='w-5 absolute right-2 cursor-pointer'
                      onClick={() => setShowDropdown(!showDropdown)}
                    />
                  </div>
                  {showDropdown && (
                    <ul className="absolute w-[300px] flex flex-col z-10 font18 bg-secondary white" ref={dropdownRef}>
                      {bookList && bookList.map(book => (
                        <li
                          key={book.id}
                          className="hover:bg-primary hover:secondary cursor-pointer p-2"
                          onClick={() => handleListItemClick(book.name)}
                        >
                          {book.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p className="font18 font800">책 가격</p>
                <div className='flex items-center gap-3'>
                  <div className='flex relative items-center'>
                    <input 
                      type="text" 
                      className="w-[170px] font16 border gray8 border-gray8 rounded-sm p-1"
                      value={bookPrice}
                      onChange={handleBookPriceChange}
                    />
                  </div>
                  <p>원</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-10'>
            <div className="flex">
              <p className="font30 font800 textHighlight">
                챌린지용 일차별 스포일러 작성
              </p>
            </div>
            <AdminChallengeSpoiler 
              bookId={bookId}
              challengeSpoilerId={challengeSpoilerId}
              challengeSpoiler={challengeSpoiler}
              setChallengeSpoiler={setChallengeSpoiler}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminChallengePage;
