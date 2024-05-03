import { Link } from 'react-router-dom';

const PaymentComplete = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-[120px] flex text-center flex-col md gap-1 font-bold text-lg">
        <p>결제가 완료되었습니다.</p>
        <p>챌린지 진행 및 결제 내역은</p>
        <p>마이페이지에서 확인 가능합니다.</p>
        <div>
          <Link to={'/mychallenge'}>
            <button className="w-20 h-10 border rounded-lg m-5 bg-secondary text-white text-lg">
              확인
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentComplete;
