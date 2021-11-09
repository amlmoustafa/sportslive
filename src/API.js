import { camelizeKeys } from "humps";
import axios from "axios";

export const API_BASE_URL =
  "http://196.135.199.186:27948/api/Employees/GetAllEmployees";

export const fetchEmployees = () => {
  return axios({
    method: "get",
    url: API_BASE_URL,
  }).then((response) => camelizeKeys(response));
};
