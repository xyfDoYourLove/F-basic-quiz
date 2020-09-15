import axios from "axios";

const baseUrl = "http://localhost:8080";

function getUserInfo() {
  return axios.get(`${baseUrl}/users/1600157923805`).catch((error) => {
    throw new Error(error);
  });
}

export default getUserInfo;
