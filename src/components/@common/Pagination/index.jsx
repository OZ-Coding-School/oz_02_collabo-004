import { useState } from "react";
import page_arrow_left from '../../../assets/images/icons/page_arrow_left.svg'; 
import page_arrow_right from '../../../assets/images/icons/page_arrow_right.svg'; 

const Pagination = ({ totalElements, pagePerNumber, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalElements / pagePerNumber);
  const [startPage, setStartPage] = useState(1);

  const handleButtonClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      if (startPage > 1 && currentPage - 1 < startPage) {
        setStartPage(startPage - 1);
      }
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      if (currentPage + 1 > startPage + 4) {
        setStartPage(startPage + 1);
      }
    }
  };

  const pageButtons = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => startPage + index);

  return (
    <div className='flex items-center'>
      <div className='flex h-[45px] items-center gray8 font400'>
        <button onClick={prevPage}> 
          <img src={page_arrow_left} className='p-5' alt="Previous Page" /> 
        </button>
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`relative p-5 font14 group ${currentPage === pageNumber ? 'secondary font800' : 'hover:gray3'}`}
            onClick={() => handleButtonClick(pageNumber)}
            style={{ position: "relative" }}
          >
            {pageNumber}
            {currentPage === pageNumber && (
              <div className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all ease-in hover:bg-secondary opacity-20"></div>
            )}
          </button>
        ))}
        <button onClick={nextPage}> 
          <img src={page_arrow_right} className='p-5' alt="Next Page" /> 
        </button>
      </div>
    </div>
  );
}

export default Pagination;