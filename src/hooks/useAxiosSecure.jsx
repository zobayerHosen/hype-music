import axios from "axios";
import { useAuth } from "./useAuth";
import toast from "react-hot-toast";

const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
const useAxiosSecure = () => {
  const {} = useAuth();
  const baseUrl = `${import.meta.env.VITE_BASE_URL}/api`;
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const axiosSecure = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  //   handle common error response
  axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
      let errorMessage = "Something went wrong.";
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
          errorMessage = "Session expired. Please log in again";
          toast.error(errorMessage);
        } else if (error.response.status === 500) {
          errorMessage = "Internal Server error, try again.";
          toast.error(errorMessage);
        }
      } else if (error.request) {
        errorMessage = "Network issue, try again.";
        toast.error(errorMessage);
      } else {
        errorMessage = "Requerst faild.";
        toast.error(errorMessage);
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
