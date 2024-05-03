import Location from '../../components/@common/Location';
import MyPageSidebar from '../../components/MyPageSidebar';
import PaymentList from '../../components/PaymentList';

const MyPaymentListPage = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex pt-[120px] md">
          <Location
            number={3}
            link1="/"
            depth1="Home"
            link2="/mychallenge"
            depth2="마이페이지"
            linkLast="/mypaymentlist"
            depthLast="결제 내역"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full py-10 flex md pb-20 justify-between">
          <MyPageSidebar />
          <div className="w-[850px]">
            <p className="font800 font30 textHighlight mb-10 w-[15rem]">
              내 챌린지 결제 내역
            </p>
            <div className="pb-[2rem] pt-[2rem] flex justify-start text-center border-t-2 border-t-black border-b">
              <p className="w-32 font-bold">주문번호</p>
              <p className="w-32 font-bold">결제일</p>
              <p className="w-80 font-bold">신청 챌린지</p>
              <p className="w-32 font-bold">상태</p>
              <p className="w-32 font-bold">금액</p>
            </div>
            <PaymentList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPaymentListPage;
