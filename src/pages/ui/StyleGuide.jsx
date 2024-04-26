import Input from '../../components/@common/Input';
import Textarea from '../../components/@common/Textarea';
import Avatar from '../../components/@common/Avatar';
import Location from '../../components/@common/Location';
import Pagination from '../../components/@common/Pagination';


const StyleGuide = () => {

  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col gap-10 w-[1080px]">
        <div>📌공통 UI 컴포넌트 StyleGuide</div>

        {/* Avatar */}
        <div>
          <p>Avatar</p>
          <hr className="border-t-2 my-3" />
          <div className="flex items-center w-[300px] justify-between">
            <Avatar size="small">TEXT</Avatar>
            <Avatar size="large">TEXT</Avatar>
            <Avatar
              size="large"
              source="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1a92/image/_9FUTEe2WluHy6oMjq-hQ77RlEE.JPG"
            />
          </div>
        </div>

      {/* Location */}
      <div>
        <p>Location</p>
        <hr className="border-t-2 my-3" />
        <div className="flex items-center justify-between">
          <Location
            number={4}
            link1="/home"
            link2="/about"
            link3="/contact"
            depth1="Home"
            depth2="About"
            depth3="Contact"
            linkLast="/current page"
            depthLast="Current Page"
          />
        </div>
        <div className="flex items-center justify-between">
          <Location
            number={3}
            link1="/"
            link2="/bookspoiler"
            depth1="Home"
            depth2="북스포일러"
            linkLast="/bookspoilerdetail"
            depthLast="북스포일러 상세페이지"
          />
        </div>
      </div>

      {/* Pagination */}
      <div>
        <p>Pagination</p>
        <hr className="border-t-2 my-3" />
        <div className="flex flex-col justify-between">
          <Pagination
          />
        </div>
      </div>

      {/* Button */}
      <div>
        <p>Button</p>
        <hr className="border-t-2 my-3" />
        <div className="flex items-center justify-between"></div>
      </div>

      {/* Input */}
      <div>
        <p>Input</p>
        <hr className="border-t-2 my-3" />
        <div className="flex items-center justify-between flex-col">
          <div className="bg-yellow-200 h-40 w-full flex justify-center items-center">
            <Textarea />
          </div>
          <Input element={'admin'} placeholder={'하이'}></Input>
          <Input element={'user'} placeholder={'여기에 입력'} />
          <hr className="border-t-2 my-3" />
          <div className="flex items-center justify-between"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default StyleGuide;
