import { useState } from 'react';
import Button from '../../components/@common/Button';
import Pagination from '../../components/@common/Pagination';

const AdminBookListPage = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (value) => {
    setSelectedCheckbox(value);
  };

  return (
    <div className="w-[800px]">
      <table className="w-full table-fixed text-center">
        <thead className="border border-black font24">
          <tr className="divide-x divide-y divide-black">
            <th className="w-16"></th>
            <th>도서명</th>
            <th className="w-60">상태</th>
          </tr>
        </thead>
        {[...Array(10).keys()].map((index) => (
          <tbody
            key={index}
            className="h-16 border border-black divide-y divide-black font18"
          >
            <tr className="divide-x divide-y divide-black">
              <td>
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={selectedCheckbox === index}
                    onChange={() => handleCheckboxChange(index)}
                    className="w-8 h-8"
                  />
                </div>
              </td>
              <td className="font20 font-semibold"></td>
              <td className="font20 font-semibold"></td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="flex justify-center">
        <Pagination totalElements={5} pagePerNumber={5} />
      </div>
      <div className="flex justify-end">
        <div className="w-[320px] flex justify-between">
          <Button
            onClick={() => {
              location.href = '/admin/bookcreate';
            }}
            width="150px"
            height="45px"
            fontSize="18px"
            fontWeight="600"
          >
            컨텐츠 수정
          </Button>
          <Button
            onClick={() => {
              location.href = '/admin/bookcreate';
            }}
            width="150px"
            height="45px"
            fontSize="18px"
            fontWeight="600"
          >
            신규 생성
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminBookListPage;
