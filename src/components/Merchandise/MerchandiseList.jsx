const MerchandiseList = () => {
  return (
    <div className="flex flex-col border-b py-7 w-56">
      <div className="flex gap-x-10 justify-between">
        <p className="font-bold flex">상품 금액</p>
        <p className="font-bold">1,000원</p>
      </div>
      <div className="flex gap-x-10 justify-between">
        <p className="font-bold text-xs text-gray8 overflow-hidden text-nowrap text-ellipsis">
          사람을 좋아하는 헤드헌터sassdsdsadddsdsadasssdadas
        </p>
        <p className="font-bold text-xs text-gray8 text-nowrap">1,000원</p>
      </div>
      <div className="flex gap-x-10 justify-between">
        <p className="font-bold text-xs text-gray8">하이</p>
        <p className="font-bold text-xs text-gray8">1,000원</p>
      </div>
    </div>
  );
};

export default MerchandiseList;
