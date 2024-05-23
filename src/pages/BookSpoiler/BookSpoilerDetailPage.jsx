import BookComment from '../../components/BookComment/BookComment';
import comment from '../../assets/images/comment.png';
import BookSnsContent from '../../components/BookSnsContent';
import BookQuratorSpoiler from '../../components/BookQuratorSpoiler';
import bookstep from '../../assets/images/bookstep.png';
import Button from '../../components/@common/Button';
import Location from '../../components/@common/Location';
import arrow_right from '../../assets/images/icons/arrow_right.svg';
import booksample from '../../assets/images/booksample.png';
import { RandomColor } from '../../utils/RandomColor';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const BookSpoilerDetailPage = ({ bookId = 1, spoilerId = 1, reviewId = 1 }) => {
  const { id } = useParams();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  let response = {
    data: {
      id: '책 아이디',
      name: '당신은 사업가입니까',
      author: '캐럴로스 저',
      published: '알에이치코리아',
      book_img: booksample,
      coupang_link:
        'https://www.coupang.com/vp/products/21038492?itemId=82145106&vendorItemId=3139880515&isAddedCart=',
      is_exposed: false,
      created_at: '2024-04-23T12:00:00Z',
      updated_at: '2024-04-26T16:00:00Z',
    },
    ok: true,
  };
  const { data: book } = useFetch(`/book/${bookId}`, response);

  let response2 = {
    data: [
      { id: 1, kw: '키워드1', book_id: '2' },
      { id: 2, kw: '키워드2', book_id: '2' },
      { id: 3, kw: '키워드3', book_id: '2' },
    ],
    ok: true,
  };
  const { data: keyword } = useFetch(`/book/${bookId}/keywords`, response2);

  let response3 = {
    data: [
      {
        id: 1,
        content: 'comment1',
        created_at: '2024-04-30T00:00:00Z',
        update_at: '2024-04-31T00:00:00Z',
        user: 'name1',
      },
      {
        id: 2,
        content: 'comment2',
        created_at: '2024-04-20T00:00:00Z',
        update_at: '2024-04-31T00:00:00Z',
        user: 'name2',
      },
      {
        id: 3,
        content: 'comment3',
        created_at: '2024-03-30T00:00:00Z',
        update_at: '2024-04-31T00:00:00Z',
        user: 'name3',
      },
      {
        id: 4,
        content: 'comment4',
        created_at: '2024-03-30T00:00:00Z',
        update_at: '2024-04-31T00:00:00Z',
        user: 'name4',
      },
      {
        id: 5,
        content: 'comment5',
        created_at: '2024-03-30T00:00:00Z',
        update_at: '2024-04-31T00:00:00Z',
        user: 'name5',
      },
      {
        id: 6,
        content: 'comment6',
        created_at: '2024-02-30T00:00:00Z',
        update_at: '2024-04-31T00:00:00Z',
        user: 'name6',
      },
      {
        id: 7,
        content: 'comment7',
        created_at: '2024-01-30T00:00:00Z',
        update_at: '2024-04-31T00:00:00Z',
        user: 'name7',
      },
    ],
    ok: true,
  };
  const { data: bookComment, setData: setBookComment } = useFetch(
    `/comments/${spoilerId}`,
    response3
  );

  let response4 = {
    data: [
      {
        id: `추천서평 아이디1`,
        channel_name: '매일 독서 매일 인사이트',
        url: '서평 외부링크 url 주소1',
        title: '사업을 하지 말아야 할 사람과 이유',
        content: `사업을 하려면 꼭, 반드시, 무조건 읽어봐야 할 책입니다. 사업가로 성공하기 위해서 필요한 자질과 준비의 중요성,
                그리고 사업을 시작할 때 고려해야 할 이유들에 대해 다루고 있습니다. 자신의 역량과 ...`,
        channel_type: '유투브',
        created_at: '2024-04-23T12:00:00Z',
        updated_at: '2024-04-26T16:00:00Z',
      },
      {
        id: '추천서평 아이디2',
        channel_name: '버킷랩 bucketlab',
        url: '서평 외부링크 url 주소2',
        title: '보스라는 환상 / 당신은 사업가 입니까?',
        content: `창업을 꿈꾸는 이유와 현실적인 문제, 동기 부여 등을 다루며 창업에 대한 환상과 현실을 분명하게 보여줍니다. 자신만의
                사업을 꿈구는 분들에게 현실적인 준비와 접근이 얼마나 중요한지 알려주는 ...`,
        channel_type: '유투브',
        created_at: '2024-04-23T12:00:00Z',
        updated_at: '2024-04-26T16:00:00Z',
      },
      {
        id: '추천서평 아이디3',
        channel_name: '음지',
        url: '서평 외부링크 url 주소3',
        title: '사업의 이면을 보여주는 책',
        content: `나는 사업가 집안에서 태어났다.
                돈을 잘 벌어 풍족했던 적도 있고, 가세가 기울어지면서 당장 끼니를 걱정해야 하던 시절도 ...`,
        channel_type: '블로그',
        created_at: '2024-04-23T12:00:00Z',
        updated_at: '2024-04-26T16:00:00Z',
      },
    ],
    ok: true,
  };
  const { data: review } = useFetch(`/review/${reviewId}`, response4);

  let response5 = {
    data: {
      id: '스포일러 아이디',
      title: '사업 성공을 꿈꾸는가, 현실적인 조언을 준다.',
      content: `사업 성공을 꿈꾸는 저에게 현실적인 조언을 제시하는 책이었습니다.
              사업을 여러차례 해왔지만 많은 어려움을 겪으며 멘탈을 바로잡기란 쉽지 않았죠
              그럴때마다 이 책을 열어보며 마음을 다스렸습니다.
              누구나 다 실패할 수 있고, 사업은 당연히 어려운 것이란걸 리마인딩 하는 좋은 책이었어요.
              그리고 좋은 사업가가 되기 위해 다시한번 마인드셋을 하는 계기가 되었습니다.
              사업의 어려움과 현실에 대해 이해하고싶은 분들께 이 책을 추천드려요.
              아래 무료 스포일러를 엄선해 모아두었으니 살펴보세요.
              대략적인 내용이 파악되신 분들은 챌린지 참여도 추천드립니다. `,
      writer: '민정',
    },
    ok: true,
  };
  const { data: quratorSpoiler } = useFetch(
    `/book/${bookId}/spoiler/${spoilerId}`,
    response5
  );

  let response6 = {
    data: {
      profile_img: 'http://',
      mbti: 'ISTP',
    },
    ok: true,
  };
  const { data: adminUserInfo } = useFetch(`/users/${id}`, response6);

  return (
    <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col md justify-center pt-10 pb-20">
        <Location
          number={3}
          link1="/"
          link2="/bookspoiler"
          depth1="Home"
          depth2="북스포일러"
          linkLast="/bookspoilerdetail"
          depthLast="북스포일러 상세페이지"
        />
        <div className="block  flex-col gap-14 pt-10">
          <span className="font800 font30 textHighlight">
            {book?.name} 북스포일러
          </span>
          <div className="flex-col flex items-center gap-14 pt-14">
            <div className="flex gap-10 justify-center">
              <img src={book?.book_img} className="w-48" />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="font900 font22 secondary">{book?.name}</p>
                  <div className="flex items-center justify-center">
                    <p className="font600">{book?.author}·</p>
                    <p className="gray5">{book?.published}</p>
                  </div>
                </div>
                <div className="flex white items-center justify-center gap-2">
                  {keyword &&
                    keyword.map((kw) => (
                      <div
                        key={kw.id}
                        className="rounded-md px-2 py-1 w-[80px] text-center"
                        style={{ backgroundColor: RandomColor() }}
                      >
                        {kw.kw}
                      </div>
                    ))}
                </div>
                <div className="flex items-start">
                  <div
                    className="flex gap-2 items-center cursor-pointer pt-2"
                    onClick={() => open(book?.coupang_link, '_blank')}
                  >
                    <p className="font600 font14 grayb">책 사러가기</p>
                    <img src={arrow_right} className="w-2 " />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md gap-14 pt-4 pb-14 rounded-3xl border-2">
              <div className="flex items-center w-[1040px] bg-primary justify-between px-8 py-7 rounded-2xl">
                <div className="flex items-center gap-5">
                  <img src={bookstep} className="w-20" />
                  <p className="font22 font700">
                    독서의 깊이를 한층 더 높여보세요!
                  </p>
                </div>
                <Button
                  onClick={() => {
                    location.href = '/challenge';
                  }}
                  width="200px"
                  height="45px"
                  fontSize="18px"
                  fontWeight="600"
                >
                  챌린지 신청하기
                </Button>
              </div>
              <BookQuratorSpoiler
                quratorSpoiler={quratorSpoiler}
                adminUserInfo={adminUserInfo}
              />
              <BookSnsContent reviewId={id} review={review} />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src={comment} alt="comment" className="w-20 h-18" />
                  <p className="font20 font800">내 생각 공유하기</p>
                </div>
                <BookComment
                  id={id}
                  comments={bookComment}
                  setComments={setBookComment}
                  placeholder="머릿속에 들어온 내용을 글로 작성함으로써 한번 더 뇌에 새길 수 있습니다. 
                               망각하지 않도록 꼭 생각을 글로 남겨보세요!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSpoilerDetailPage;
