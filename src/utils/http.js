import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;
    // debugger;
    return data;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 401:
          // 处理未授权（如 token 过期）
          console.error("未授权，请重新登录");
          break;
        case 404:
          console.error("请求的资源不存在");
          break;
        case 500:
          console.error("服务器内部错误");
          break;
        default:
          console.error("请求失败", data.message || "未知错误");
      }
    } else if (error.request) {
      console.error("网络错误，请检查网络连接");
    } else {
      console.error("请求配置错误", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
