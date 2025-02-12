import toast from "react-hot-toast";

const ToastSuccess = (params) => {
  return toast.success(params);
};

const ToastError = (params) => {
  return toast.error(params);
};

export { ToastSuccess, ToastError };
