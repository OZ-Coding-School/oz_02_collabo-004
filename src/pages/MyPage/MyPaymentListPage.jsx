import Location from '../../components/@common/Location';
import MyPageSidebar from '../../components/MyPageSidebar';
import PaymentList from '../../components/PaymentList';

const MyPaymentListPage = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex pt-[100px] md justify-end">
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
        <div className="py-10 flex md pb-20">
          <MyPageSidebar />
          <div className="w-full">
            <p className=" border-b-2 border-black w-full py-5 text-3xl font-bold">
              결제 내역
            </p>
            <div className="pb-[2rem] pt-[2rem] flex justify-start text-center border-b">
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
