import axios from "axios";

const baseUrl = "http://localhost:8080";

function getFunction(path) {
  return axios.get(`${baseUrl}${path}`).catch((error) => {
    throw new Error(error);
  });
}

function postFunction(path, data) {
  return axios.post(`${baseUrl}${path}`, data).catch((error) => {
    throw new Error(error);
  });
}

export { getFunction, postFunction };
