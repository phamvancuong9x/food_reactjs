import axiosClient from "./axiosClient";

const homeApi = {
  getAll(params) {
    const url = "/home_moc_food";
    return axiosClient.get(url, { params });
  },
};
export default homeApi;
