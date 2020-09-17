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

// TODO feedback: 命名不符合语义，应该从功能的角度去命名
export { getFunction, postFunction };
