import axios from "axios";
import toast from "react-hot-toast";

const useAxiosPublic = () => {
  const baseUrl = `${import.meta.env.VITE_BASE_URL}/api`; // Ensure /api is always prefixed
  const axiosPublic = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
  });

  axiosPublic.interceptors.response.use(
    (response) => response, // Directly return the response if successful
    (error) => {
      let errorMessage;
      if (error.response) {
        if (error.response.status === 500) {
          errorMessage = "Internal server error, try again";
          toast.error(errorMessage);
        }
      } else if (error.request) {
        errorMessage = "Network issue, try again.";
        toast.error(errorMessage);
      }
      return Promise.reject(error);
    }
  );

  return axiosPublic;
};

export default useAxiosPublic;
