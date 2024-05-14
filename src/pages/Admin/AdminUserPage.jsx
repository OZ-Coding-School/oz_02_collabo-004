import { useState } from 'react';
import Pagination from '../../components/@common/Pagination';
import Button from '../../components/@common/Button';

const AdminUserPage = () => {
  const [userType, setUserType] = useState([
    { id: 1, selectedOption: '' },
    { id: 2, selectedOption: '' },
    { id: 3, selectedOption: '' },
  ]);

  const [accountState, setAccountState] = useState([
    { id: 1, selectedOption: '' },
    { id: 2, selectedOption: '' },
  ]);

  const handleUserTypeChange = (index, value) => {
    const updatedUserType = [...userType];
    updatedUserType[index].selectedOption = value;
    setUserType(updatedUserType);
  };

  const handleAccountStateChange = (index, value) => {
    const updatedAccountState = [...accountState];
    updatedAccountState[index].selectedOption = value;
    setAccountState(updatedAccountState);
  };

  return (
    <div className="w-[850px]">
      <table className="w-full text-center">
        <thead className="border border-black font16">
          <tr className="divide-x divide-y divide-black">
            <th className="w-[150px]">닉네임</th>
            <th className="">계정</th>
            <th className="w-[120px]">연락처</th>
            <th className="w-[80px]">회원 유형</th>
            <th className="w-[80px]">챌린지 수</th>
            <th className="w-[80px]">계정 상태</th>
            <th className="w-[110px]">가입일</th>
          </tr>
        </thead>
        {[...Array(20).keys()].map((index, item) => (
          <tbody
            key={index}
            className="h-8 border border-black divide-y divide-black font16"
          >
            <tr className="divide-x divide-y divide-black">
              <td></td>
              <td></td>
              <td></td>
              <td>
                <select
                  value={item.selectedOption}
                  onChange={(e) => handleUserTypeChange(index, e.target.value)}
                >
                  <option value=""></option>
                  <option value="General">일반</option>
                  <option value="Challenge">챌린지</option>
                  <option value="Admin">운영자</option>
                </select>
              </td>
              <td></td>
              <td>
                <select
                  value={item.selectedOption}
                  onChange={(e) =>
                    handleAccountStateChange(index, e.target.value)
                  }
                >
                  <option value=""></option>
                  <option value="Normalcy">정상</option>
                  <option value="Dormancy">휴면</option>
                </select>
              </td>
              <td></td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="flex justify-center">
        <Pagination totalElements={20} pagePerNumber={20} />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => {}}
          width="150px"
          height="45px"
          fontSize="18px"
          fontWeight="600"
        >
          저장
        </Button>
      </div>
    </div>
  );
};

export default AdminUserPage;
