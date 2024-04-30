import { useState } from 'react';
import Merchandise from '../../components/Merchandise/Merchandise';
import MerchandiseList from '../../components/Merchandise/MerchandiseList';

const PaymentPage = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    console.log(isSelected);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="py-[100px] flex flex-col md gap-y-7">
        <p className="textHighlight w-28 text-3xl font-bold">결제하기</p>
        <div className="flex flex-col px-10 gap-y-10">
          <div className="flex flex-col gap-y-7">
            <p className="font-bold text-2xl border-b border-black pb-3">
              주문 정보
            </p>
            <Merchandise />
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="font-bold text-2xl pb-3">결제 수단</p>
              <div className="flex border-y border-black py-5 gap-x-10">
                <p className="font-semibold text-lg">결제 수단 선택</p>
                <button
                  onClick={handleClick}
                  selected={isSelected}
                  className={`border bg-yellow-400 w-32 text-sm font-bold ${
                    isSelected ? 'border-blue-700 border-4' : ''
                  }`}
                >
                  카카오페이
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <MerchandiseList />
              <div className="flex gap-x-10 py-5 w-56 justify-between">
                <p className="font-bold">최종결제금액</p>
                <p className="font-bold">1,000원</p>
              </div>
              <section className="flex flex-col gap-2">
                <p className="text-gray8 text-sm">유의사항</p>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray8">
                    - 어쩌구저쩌구 환불은 뭐시기저시기 언제까지
                  </p>
                  <p className="text-xs text-gray8">
                    - 취소는 언제까지 어쩌구저쩌구 솰라솰라
                  </p>
                  <p className="text-xs text-gray8">
                    - 챌린지 완료시 100% 환불 가능
                  </p>
                  <p className="text-xs text-gray8">
                    - 시작일은 구매 직후부터 어쩌구저쩌구
                  </p>
                  <p className="text-xs text-gray8">- 그 외는 어쩌구저쩌구</p>
                </div>
              </section>
              <div className="pt-7">
                <button
                  className="border w-80 bg-blue-500 text-white px-5 py-2 rounded-lg"
                  onClick={() => {
                    alert('결제 시스템은 조금 더 기다려주세요!');
                  }}
                >
                  1,000원 결제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
