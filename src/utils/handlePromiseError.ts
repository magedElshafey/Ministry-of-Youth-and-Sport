import { AxiosError } from "axios";
import { toast } from "react-toastify";

const handlePromisError = (error) => {
  if (error instanceof AxiosError && error.response) {
    toast.error(error.response.data.message);
  } else {
    toast.error("An unexpected error occurred");
  }
};

export default handlePromisError;
