const ChallengeSpoiler = () => {

  return (
    <div className="flex w-[860px]">
      <div className="flex flex-col gap-3 p-10 md bg-primary justify-center rounded-2xl shadow-lg">
        <div className="flex flex-col rounded-lg gap-10">
          <p className="font600 font20">
            책 제목
          </p>
          <p>
            관리자 제공 1일차 스포일러 내용
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChallengeSpoiler;