import { useState } from "react";
import page_arrow_left from '../../../assets/images/icons/page_arrow_left.svg'; 
import page_arrow_right from '../../../assets/images/icons/page_arrow_right.svg'; 

const Pagination = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const handleButtonClick = (pageNumber) => {
    setActiveButton(pageNumber);
  };

  const prevPage = () => {
    if (activeButton > 1) {
      setActiveButton(activeButton - 1);
      if (startPage > 1 && activeButton - 1 < startPage) {
        setStartPage(startPage - 1);
      }
    }
  };

  const nextPage = () => {
    if (activeButton < 10) {
      setActiveButton(activeButton + 1);
      if (activeButton + 1 > startPage + 4) {
        setStartPage(startPage + 1);
      }
    }
  };

  // TODO: 전체 원소개수, 페이지 당 보여줄 원소 개수 파라미터로 받아서 pagination 로직 totalElements, pagePerNumber
  // TODO:몇페이지 눌렀는지? 저장해놓기 

  return (
    <div className='flex items-center'>
      <div className='flex h-[45px] items-center gray8 font400'>
        <button onClick={prevPage}> 
          <img src={page_arrow_left} className='p-5'></img> 
        </button>
        {Array.from({length: 5}, (_, index) => startPage + index).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`relative p-5 font14 group ${activeButton === pageNumber ? 'secondary font800' : 'hover:gray3'}`}
            onClick={() => handleButtonClick(pageNumber)}
            style={{ position: "relative" }}
          >
            {pageNumber}
            {activeButton === pageNumber && (
              <div className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all ease-in hover:bg-secondary opacity-20"></div>
            )}
          </button>
        ))}
        <button onClick={nextPage}> 
          <img src={page_arrow_right} className='p-5'></img> 
        </button>
      </div>
    </div>
  );
}

export default Pagination;
