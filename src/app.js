import "./style/index.scss";
import { getFunction, postFunction } from "./Introduction/action";
import createDocument from "./Introduction/render";

const desc = document.getElementById("desc");
const avatar = document.getElementById("avatar");
const container = document.getElementById("educations");
const introText = document.getElementById("intro-text");
let path;
let data;
let userId;

const addUser = async () => {
  path = `/users`;
  data = {
    name: "ai lun xiao",
    age: 18,
    avatar: "http://m.imeitou.com/uploads/allimg/2019032114/kjfjfrxjnjj.jpg",
    description:
      "Shall I compare thee to a summer's day Thou art more lovely and more temperate " +
      "Shall I compare thee to a summer's day Thou art more lovely and more temperate ",
  };
  const response = await postFunction(path, data);
  userId = response.data;
};

const addEducation = async () => {
  path = `/users/${userId}/educations`;
  data = {
    year: 2020,
    title: "佛罗里达大学",
    description:
      "在佛罗里达大学取得了优异的成绩在佛罗里达大学取得了优异的成绩在佛罗里达大学取得了优异的成绩",
  };
  await postFunction(path, data);
};

const renderUserInfo = async () => {
  path = `/users/${userId}`;
  const response = await getFunction(path);
  desc.innerHTML = `my name is ${response.data.name} and this is my resume/cv`;
  introText.innerHTML = response.data.description;
  avatar.src = response.data.avatar;
};

const renderEducations = async () => {
  path = `/users/${userId}/educations`;
  const response = await getFunction(path);
  Object.values(response.data).map((item) =>
    container.appendChild(
      createDocument(item.year, item.title, item.description)
    )
  );
};

addUser().then(() => {
  addEducation().then();
  addEducation().then();
  renderUserInfo().then();
  renderEducations().then();
});
