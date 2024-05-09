// import axiosInstance from "../../utils/axios";

export const getBook = async (book_id) => {
  try {
    // const response = await axiosInstance.get(`/book/${book_id}`);
    // return await response;
  } catch (error) {
    console.error(`[GET] - /book/${book_id}`, error);
  }
};