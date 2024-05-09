import { useRef, useState } from 'react';
import Button from "../../components/@common/Button";
import arrow_down_fill from '../../assets/images/icons/arrow_down_fill.svg'
import useOnClickOutside from '../../hooks/useOnClickOutside';

const AdminChallengePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectListItem, setSelectListItem] = useState('');
  
  const dropdownRef = useRef(null); 

  useOnClickOutside(dropdownRef, () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  });

  const handleListItemClick = (item) => {
    setSelectListItem(item);
    setShowDropdown(false); 
  };

  const handleInputChange = (e) => {
    setSelectListItem(e.target.value);
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
                    <ul className="absolute w-[300px] flex flex-col z-10 font18 bg-secondary white"  ref={dropdownRef}>
                      <li className="hover:bg-primary hover:secondary cursor-pointer p-2" onClick={() => handleListItemClick('리스트 항목 1')}>리스트 항목 1</li>
                      <li className="hover:bg-primary hover:secondary cursor-pointer p-2" onClick={() => handleListItemClick('리스트 항목 2')}>리스트 항목 2</li>
                      <li className="hover:bg-primary hover:secondary cursor-pointer p-2" onClick={() => handleListItemClick('리스트 항목 3')}>리스트 항목 3</li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p className="font18 font800">책 가격</p>
                <div className='flex items-center gap-3'>
                  <div className='flex relative items-center'>
                    <input type="text" className="w-[170px] font16 border gray8 border-gray8 rounded-sm p-1"/>
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
            <div className="flex flex-col gap-5">
            {[...Array(6).keys()].map(index => (
              <div key={index} className="flex items-start gap-5">
                <p className="font20 font800 w-[50px]">
                  {index === 5 ? '완주' : `${index + 1}일차`}
                </p>
                <div className='flex flex-col items-start gap-3'>
                  <div className='flex items-center gap-3'>
                    <p className='font500'>제목</p>
                    <input type="text" className="w-[600px] font16 border gray8 border-gray8 rounded-sm p-1"/>
                  </div>
                  <div className='flex items-center gap-3'>
                    <p className='font500'>본문</p>
                    <input type="text" className="w-[600px] font16 border gray8 border-gray8 rounded-sm p-1"/>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <div className='flex justify-end'>
              <Button 
                onClick={''} 
                width="150px" height="45px" fontSize="18px" fontWeight="600"
              >
                저장
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default AdminChallengePage;
