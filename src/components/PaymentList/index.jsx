import useFetch from '../../hooks/useFetch';

const PaymentList = () => {
  let response = {
    data: {},
    ok: true,
  };

  response.data = [
    {
      merchant_uid: 11111,
      orderday: '2024-05-02',
      name: '미치지 않고서야',
      status: '결제완료',
      amount: '1,000원',
    },
    {
      merchant_uid: 22222,
      orderday: '2024-05-13',
      name: '스틱',
      status: '결제완료',
      amount: '1,000원',
    },
    {
      merchant_uid: 33333,
      orderday: '2024-05-18',
      name: '클루지',
      status: '결제완료',
      amount: '1,000원',
    },
  ];

  const { data: payment } = useFetch('/challenges', response);
  console.log(payment);

  return (
    <>
      {payment &&
        payment.map((item) => (
          <div
            className="pb-[2rem] pt-[2rem] flex justify-start text-center border-b"
            key={item.merchant_uid}
          >
            <p className="w-32">{item.merchant_uid}</p>
            <p className="w-32">{item.orderday}</p>
            <p className="w-80">{item.name}</p>
            <p className="w-32">{item.amount}</p>
          </div>
        ))}
    </>
  );
};

export default PaymentList;
