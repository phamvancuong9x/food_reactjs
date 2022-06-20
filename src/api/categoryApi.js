import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/category_moc_food";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/category_moc_food/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/category_moc_food`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/category_moc_food/`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/category_moc_food/${id}`;
    return axiosClient.delete(url);
  },
};
export default categoryApi;
