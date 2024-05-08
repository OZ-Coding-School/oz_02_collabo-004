// import axiosInstance from "../../utils/axios";

export const getBookKeywords = async (book_id) => {
  try {
    // const response = await axiosInstance.get(`book/${book_id}/keywords`);
    // return await response;
  } catch (error) {
    console.error(`[GET] - /book/${book_id}`, error);
  }
};