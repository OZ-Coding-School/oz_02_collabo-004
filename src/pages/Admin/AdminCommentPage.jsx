import Pagination from "../../components/@common/Pagination";
import Button from "../../components/@common/Button";

const AdminCommentPage = () => {
  const headers = [
    {
      text: "댓글내용",
      value: "댓글내용",
      style: "w-[400px]",
    },
    {
      text: "작성자",
      value: "작성자",
      style: "w-[100px]",
    },
    {
      text: "작성일자",
      value: "작성일자",
      style: "w-[120px]",
    },
    {
      text: "댓글위치",
      value: "댓글위치",
      style: "w-[120px]",
    },
  ];

  const items = [
    {
      댓글내용: "잼따",
      작성자: "농당곰",
      작성일자: "2013-05-29",
      댓글위치: "챌린지",
    },
    {
      댓글내용: "잼따",
      작성자: "농당곰",
      작성일자: "2013-05-29",
      댓글위치: "챌린지",
    },
  ];

  const headerKey = headers.map((header) => header.value);

  return (
    <div className="w-[800px]">
      <table className="w-full table-fixed text-center">
        <thead className="border border-black font24">
          <tr className="divide-x divide-y divide-black">
            {
              <th className="border border-black">
                <div className="flex items-center justify-center">
                  <input type="checkbox" className="w-6 h-6" />
                </div>
              </th>
            }
            {headers.map((header) => (
              <th className={header.style} key={header.text}>
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="h-16 border border-black divide-y divide-black font18">
          {items.map((item, index) => (
            <tr key={index} className="divide-x divide-y divide-black">
              {
                <td className="border border-black">
                  <div className="flex items-center justify-center">
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                </td>
              }
              {headerKey.map((key) => (
                <td key={key + index}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-[800px] flex justify-center">
        <Pagination totalElements={20} pagePerNumber={20} />
      </div>
      <div className="w-[800px] flex items-center justify-end">
        <div className="flex w-[150px] justify-between">
          <Button>보여지기</Button>
          <Button>숨기기</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminCommentPage;
