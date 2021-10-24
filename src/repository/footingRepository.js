import axiosClient from "./axiosClient";

const footingRepository = {
  get(data) {
    const url = "/rpc/footing-design/calculate";
    return axiosClient.post(url, data);
  },
};
export default footingRepository;
