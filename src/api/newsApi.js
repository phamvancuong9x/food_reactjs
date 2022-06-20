import axiosClient from "./axiosClient";

const newApi = {
  getAll(params) {
    const url = "/news_moc_food";
    return axiosClient.get(url, { params });
  },
  get(params) {
    const url = "/news";
    return axiosClient.get(url, { params });
  },
  add(data) {
    const url = `/news`;
    return axiosClient.post(url, data);
  },
  remove(id) {
    const url = `/news/${id}`;
    return axiosClient.delete(url);
  },
};
export default newApi;
