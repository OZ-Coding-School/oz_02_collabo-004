import Avatar from '../../components/@common/Avatar';
import Input from '../../components/@common/Input';
import Textarea from '../../components/@common/Textarea';

const StyleGuide = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col gap-10 w-[1080px]">
        <div>📌공통 UI 컴포넌트 StyleGuide</div>

        {/* Avatar */}
        <div>
          <p>Avatar</p>
          <div className="flex items-center w-[300px] justify-between">
            <Avatar size="small">TEXT</Avatar>
            <Avatar size="large">TEXT</Avatar>
            <Avatar
              size="large"
              source="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1a92/image/_9FUTEe2WluHy6oMjq-hQ77RlEE.JPG"
            />
          </div>
        </div>

        {/* Button */}
        <div>
          <p>Button</p>
          <div className="flex items-center justify-between"></div>
        </div>

        {/* Input */}
        <div>
          <p>Input</p>
          <div className="flex items-center justify-between flex-col">
            <div className="bg-yellow-200 h-40 w-full flex justify-center items-center">
              <Textarea />
            </div>
            <Input element={'admin'} placeholder={'하이'}></Input>
            <Input element={'user'} placeholder={'여기에 입력'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
