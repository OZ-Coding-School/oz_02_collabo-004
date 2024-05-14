import useFetch from '../../hooks/useFetch';
import { RandomColor } from '../../utils/RandomColor';
import Button from '../@common/Button';
import booksample from '../../assets/images/bookimage.jpg';
import { Link } from 'react-router-dom';

const MyChallengeStatus = ({ book_id, user_id, challengeinfo_id }) => {
  let response_keyword = {
    data: {},
    ok: true,
  };

  let response_challenge = {
    data: {},
    ok: true,
  };

  response_keyword.data = [
    { id: 1, kw: '뇌과학', book_id: 1 },
    { id: 2, kw: '자청', book_id: 1 },
    { id: 3, kw: '모니카', book_id: 1 },
  ];

  const { data: keyword } = useFetch(
    `/book/${book_id}/keywords`,
    response_keyword
  );

  response_challenge.data = {
    id: '1',
    book_img: '../../assets/images/booksample.png',
    name: '당신은 사업가입니까',
    author: '캐럴로스 저',
    published: '알에이치코리아',
  };

  const { data: challenge } = useFetch(
    `/mychallenge/detail/${user_id}/${challengeinfo_id}`,
    response_challenge
  );

  return (
    <div className="relative w-[800px] h-[260px]">
      <div className="absolute -z-10 w-[800px] h-[175px] top-[85px] bg-gray-300"></div>
      <div className="grid grid-cols-[210px_minmax(260px,_0fr)_300px] grid-rows-3 gap-2 w-[800px] h-[260px]">
        <div className="flex items-center justify-center row-span-3 font-bold">
          <div className="flex items-center justify-center w-[180px] h-[225px] text-white">
            <img src={booksample} className="h-full" />
          </div>
        </div>

        <div className="flex items-end col-span-2 text-2xl font-extrabold">
          {challenge?.name}
        </div>

        <div className="flex flex-col w-[240px]">
          <div className="">
            <span className="text-xl font-bold">{challenge?.author}&nbsp;</span>
            <span className="text-xl text-gray-500">
              ・ {challenge?.published}
            </span>
          </div>
          <div className="flex white py-2 gap-2">
            {keyword &&
              keyword.map((kw) => (
                <div
                  key={kw.id}
                  className="flex items-center justify-center rounded-[4px] w-[72px] h-9 font-bold"
                  style={{ backgroundColor: RandomColor() }}
                >
                  {kw.kw}
                </div>
              ))}
          </div>
        </div>

        <div className="py-2">
          <div className="w-full h-0.5 bg-white rounded-full">
            <div className="w-4/5 h-0.5 bg-secondary rounded-full"></div>
          </div>
          <div className="flex justify-between text-xl">
            <span className="text-blue-800 font-bold">D-2</span>
            <span className="font-light">
              <span className="text-blue-800">80%</span>&nbsp;챌린지 완료
            </span>
          </div>
          <div className="flex flex-col font-light">
            <span>
              <span className="text-blue-900">2024.04.27</span>
              &nbsp;까지 챌린지 종료
            </span>
            <span>
              <span className="text-blue-900">2024.05.27</span>
              &nbsp;까지 열람 가능
            </span>
          </div>
        </div>

        <div className="flex items-center col-span-2">
          <Link to="/challengeaction">
            <Button
              width="500px"
              height="50px"
              fontSize="26px"
              fontWeight="bold"
            >
              챌린지 하러가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyChallengeStatus;
