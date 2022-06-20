import axiosClient from "./axiosClient";

function filterData(array, type) {
  const newData = array.filter((value) => {
    return value.homeType == type;
  });
  return newData;
}

const homeApi = {
  getAll(params) {
    const url = "/home_moc_food";
    return axiosClient.get(url, { params });
  },
};
export default homeApi;
