// import axiosInstance from "../../utils/axios";

export const getComments = async (spoiler_id) => {
  try {
    // const response = await axiosInstance.get(`/comments/${spoiler_id}`);
    // return await response;
  } catch (error) {
    console.error(`[GET] - /comments/${spoiler_id}`, error);
  }
};