import Location from '../../components/@common/Location';
import MyChallengeStatus from '../../components/MyChallengeStatus';
import MyPageSidebar from '../../components/MyPageSidebar';
import useFetch from '../../hooks/useFetch';

const MyChallengePage = ({ userId }) => {
  let response_total = {
    data: { total: 56 },
    ok: true,
  };
  const { data: total } = useFetch('/challenge/total', response_total);

  let response_list = {
    data: [
      {
        id: 1,
        created_at: '2024-05-09T14:34:13.156710',
        updated_at: '2024-05-09T14:51:51.676834',
        user: 1,
        book: 1,
      },
      {
        id: 2,
        created_at: '2024-05-09T14:50:40.439757',
        updated_at: '2024-05-09T14:51:38.736475',
        user: 2,
        book: 2,
      },
      {
        id: 3,
        created_at: '2024-05-09T15:04:00.240304',
        updated_at: '2024-05-09T15:04:00.240327',
        user: 3,
        book: 3,
      },
    ],
    ok: true,
  };
  const { data: list } = useFetch(`/mychallenges/${userId}`, response_list);

  return (
    <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col md justify-start pt-10 pb-20">
        <Location
          number={3}
          link1="/"
          link2="/mychallenge"
          depth1="Home"
          depth2="마이페이지"
          linkLast="/mychallenge"
          depthLast="내 챌린지"
        />

        <div className="flex justify-between w-full pt-10">
          <div className="">
            <MyPageSidebar />
          </div>
          <div className="flex flex-col items-end w-[850px]">
            <div className="w-full">
              <p className="text-xl font-semibold">
                지금 Rose님 포함 총&nbsp;
                <span className="text-secondary text-2xl font-extrabold">
                  {total?.total}개
                </span>
                의 챌린지가 진행중입니다!
              </p>
              <hr className="border border-solid" />
              <div className="py-5 ml-5 w-[130px]">
                <p className="flex items-center justify-center font30 font800 w-full textHighlight">
                  내 챌린지
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              {list &&
                list.map((book) => (
                  <MyChallengeStatus
                    key={book.id}
                    bookId={book.book}
                    userId={userId}
                    challengeInfoId={book.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChallengePage;
