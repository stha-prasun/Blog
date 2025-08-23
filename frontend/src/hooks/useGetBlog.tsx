import { useEffect, useCallback } from "react";
import { BLOG_API_ENDPOINT } from "../utils/constants";
import axios from "axios";
import { useAppDispatch } from "../redux/hooks";
import { setBlog } from "../redux/blog";

const useGetBlog = (id: string | null) => {
  const dispatch = useAppDispatch();

  const fetchBlog = useCallback(async () => {
    if (!id) return;

    try {
      const response = await axios.get(`${BLOG_API_ENDPOINT}/get/${id}`, {
        withCredentials: true,
      });

      if (response.data?.success) {
        dispatch(setBlog(response.data.blog));
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  }, [id, dispatch]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  return fetchBlog;
};

export default useGetBlog;
