import BookComment from "../../components/BookComment"
import comment from "../../assets/images/comment.png"
import BookSnsContent from "../../components/BookSnsContent";
import BookQuratorSpoiler from "../../components/BookQuratorSpoiler";
import bookstep from "../../assets/images/bookstep.png";
import Button from "../../components/@common/Button";
import Location from "../../components/@common/Location";
import arrow_right from "../../assets/images/icons/arrow_right.svg"
import booksample from "../../assets/images/booksample.png"
import Modal from "../../components/@common/Modal";
import { useEffect, useState } from "react";
import { RandomColor } from '../../utils/RandomColor';
// import { isEmptyId } from "../../api/common";
// import { useParams } from "react-router-dom";
// import { getBook } from "../../api/book";

const BookSpoilerDetailPage = () => {
  // const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteCommentIndex, setDeleteCommentIndex] = useState(null); 
  const [spoilerDetail, setSpoilerDetail] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    // if (isEmptyId(id)) return '';
    const getBook = async () => {
      try {
        // const response = await getBook(id);
        // let data = await response.json();
        let data = {
          id:"책 아이디",
          name:"당신은 사업가입니까",
          author:"캐럴로스 저",
          published:"알에이치코리아",
          book_img:"../../assets/images/booksample.png",
          coupang_link:"https://www.coupang.com/vp/products/21038492?itemId=82145106&vendorItemId=3139880515&isAddedCart=",
          is_exposed: false,
          created_at:"2024-04-23T12:00:00Z",
          updated_at:"2024-04-26T16:00:00Z",
        }
        setSpoilerDetail(data);
      } catch (error) {
        console.error("Error book data", error);
      }
    }
    getBook();
  }, []);

  useEffect( () => {
    // if (isEmptyId(id)) return '';
    const getBookKeywords = async () => {
      try {
        // const response = await getBookKeywords(id);
        // const data = await response.json();
        let data = [
          { id: 1, kw: '키워드1', book_id: '2'},
          { id: 2, kw: '키워드2', book_id: '2'},
          { id: 3, kw: '키워드3', book_id: '2'},
        ]
        setKeyword(data);
      } catch (error) {
        console.error("Error keyword data", error);
      }
    }
    getBookKeywords();
  }, []);

  useEffect( () => {
    // if (isEmptyId(id)) return '';
    const getComments = async () => {
      try {
        // const response = await getComments(id); 
        // const data = await response.json();
        let data = [
          { id: 1, comment_content: 'comment1', created_at: '2024-04-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name1'},
          { id: 2, comment_content: 'comment2', created_at: '2024-04-20T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name2'},
          { id: 3, comment_content: 'comment3', created_at: '2024-03-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name3'},
          { id: 4, comment_content: 'comment4', created_at: '2024-03-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name4'},
          { id: 5, comment_content: 'comment5', created_at: '2024-03-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name5'},
          { id: 6, comment_content: 'comment6', created_at: '2024-02-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name6'},
          { id: 7, comment_content: 'comment7', created_at: '2024-01-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name7'},
        ]
        setComments(data);
      } catch (error) {
        console.error("Error comment data", error);
      }
    }
    getComments();
  }, []);

  const handleConfirmDelete = () => {
    if (deleteCommentIndex !== null) {
      const updateComments = [...comments];
      updateComments.splice(deleteCommentIndex, 1);
      
      setComments(updateComments);
      setDeleteCommentIndex(null);
      setModalOpen(true);
    }
  };


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
          <span className="font800 font30 textHighlight">{spoilerDetail?.name} 북스포일러</span>
          <div className="flex-col flex items-center gap-14 pt-14">
            <div className="flex gap-10 justify-center">
              {/* TODO: img {spoilerDetail?.book_img}*/}
              <img src={booksample} className="w-48"/> 
              <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="font900 font22 secondary">{spoilerDetail?.name}</p>
                  <div className="flex items-center justify-center">
                    <p className="font600">{spoilerDetail?.author}·</p>
                    <p className="gray5">{spoilerDetail?.published}</p>
                  </div>
                </div>
                <div className="flex white items-center justify-center gap-2">
                {keyword && keyword.map((kw) => (
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
                  <div className="flex gap-2 items-center cursor-pointer pt-2"
                      onClick={() => open('https://www.coupang.com/', '_blank')}
                  >
                    <p className="font600 font14 grayb">책 사러가기</p>
                    <img src={arrow_right} className="w-2 "/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md gap-14 pt-4 pb-14 rounded-3xl border-2">
              <div className="flex items-center w-[1040px] bg-primary justify-between px-8 py-7 rounded-2xl">
                <div className="flex items-center gap-5">
                  <img src={bookstep} className="w-20"/>
                  <p className="font22 font700">독서의 깊이를 한층 더 높여보세요!</p>
                </div>
                <Button 
                  onClick={() => {location.href = "/challenge"}} 
                  width="200px" height="45px" fontSize="18px" fontWeight="600"
                >
                  챌린지 신청하기
                </Button>
              </div>
              <BookQuratorSpoiler />
              <BookSnsContent />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src={comment} alt="comment" className="w-20 h-18"/>
                  <p className="font20 font800">내 생각 공유하기</p>
                </div> 
                <BookComment 
                  comments={comments} 
                  setModalOpen={setModalOpen}
                  setComments={setComments}
                  onDeleteComment={setDeleteCommentIndex}
                  placeholder="머릿속에 들어온 내용을 글로 작성함으로써 한번 더 뇌에 새길 수 있습니다. 
                               망각하지 않도록 꼭 생각을 글로 남겨보세요!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen ? 
        <Modal 
          setModalOpen={setModalOpen}
          message="댓글을 삭제하시겠습니까?"
          onCancel={() => setModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      : null
      }
    </div>
  )
}

export default BookSpoilerDetailPage
