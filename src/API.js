import { camelizeKeys } from "humps";
import axios from "axios";

export const API_BASE_URL = "";

export const fetchAllNews = () => {
  return axios({
    method: "get",
    url: { API_BASE_URL },
  }).then((response) => camelizeKeys(response));
};
