const PaymentList = () => {
  return (
    <>
      <div className="pb-[2rem] pt-[2rem] flex justify-start text-center border-b">
        {/* merchant_uid */}
        <p className="w-32">12663</p>
        {/* 결제일 ㅇㄷ? */}
        <p className="w-32">2024.04.14</p>
        {/* 챌린지 ㅇㄷ? */}
        <p className="w-80">미치지 않고서야</p>
        {/* status */}
        <p className="w-32">결제완료</p>
        {/* amount */}
        <p className="w-32">1,000원</p>
      </div>
      <div className="pb-[2rem] pt-[2rem] flex justify-start text-center border-b">
        <p className="w-32">12623</p>
        <p className="w-32">2024.04.12</p>
        <p className="w-80">당신은 사업가입니까</p>
        <p className="w-32">결제완료</p>
        <p className="w-32">1,000원</p>
      </div>
      <div className="pb-[2rem] pt-[2rem] flex justify-start text-center border-b">
        <p className="w-32">12345</p>
        <p className="w-32">2024.04.29</p>
        <p className="w-80">폭풍의 언덕</p>
        <p className="w-32">결제완료</p>
        <p className="w-32">1,000원</p>
      </div>
    </>
  );
};

export default PaymentList;
