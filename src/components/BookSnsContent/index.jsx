import youtube from '../../assets/images/icons/youtube.svg'
import blog from '../../assets/images/icons/blog.svg'

const BookSnsContent = () => {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <div className="flex flex-col w-[860px] gap-1 px-8 py-5 rounded-xl bg-graylight">
          <div className="flex justify-between">
            <div className="font600 font20">사업을 하지 말아야 할 사람과 이유</div>
            <div className='flex items-center gap-3'>
              <img src={youtube} alt="youtube" className='w-10 h-5'/>
              <div className="font600 font16">매일 독서 매일 인사이트</div>
            </div>
          </div>
          <div className="font14 gray5 line-clamp-2">
            사업을 하려면 꼭, 반드시, 무조건 읽어봐야 할 책입니다. 사업가로 성공하기 위해서 필요한 자질과 준비의 중요성,
            그리고 사업을 시작할 때 고려해야 할 이유들에 대해 다루고 있습니다. 자신의 역량과 ...
          </div>
        </div>
        <div className="flex flex-col w-[860px] gap-1 px-8 py-5 rounded-xl bg-graylight">
          <div className="flex justify-between">
            <div className="font600 font20">보스라는 환상 / 당신은 사업가 입니까?</div>
            <div className='flex items-center gap-3'>
              <img src={youtube} alt="youtube" className='w-10 h-5'/>
              <div className="font600 font16 line-clamp-2">버킷랩 bucketlab</div>
            </div>
          </div>
          <div className="font14 gray5">
            창업을 꿈꾸는 이유와 현실적인 문제, 동기 부여 등을 다루며 창업에 대한 환상과 현실을 분명하게 보여줍니다. 자신만의
            사업을 꿈구는 분들에게 현실적인 준비와 접근이 얼마나 중요한지 알려주는 ...
          </div>
        </div>
        <div className="flex flex-col w-[860px] gap-1 px-8 py-5 rounded-xl bg-graylight">
          <div className="flex justify-between">
            <div className="font600 font20">사업의 이면을 보여주는 책</div>
            <div className='flex items-center gap-3'>
              <img src={blog} alt="blog" className='w-15 h-8'/>
              <div className="font600 font16">음지</div>
            </div>
          </div>
          <div className="font14 gray5 line-clamp-2">
            나는 사업가 집안에서 태어났다. <br/>
            돈을 잘 벌어 풍족했던 적도 있고, 가세가 기울어지면서 당장 끼니를 걱정해야 하던 시절도 ...
          </div>
        </div>
      </div>
    </>
  )
}

export default BookSnsContent;