import "./style/index.scss";
import { getFunction, postFunction } from "./Introduction/action";
import createDocument from "./Introduction/render";

// TODO feedback: 建议把常量放在相应功能方法里去声明
const descDom = document.getElementById("desc");
const avatarDom = document.getElementById("avatar");
const container = document.getElementById("educations");
const introTextDom = document.getElementById("intro-text");
// TODO feedback: 不建议定义全局变量
let path;
let data;
let userId;

const addUser = async (postMethod) => {
  // TODO feedback: 没有添加的需求
  path = `/users`;
  data = {
    name: "ai lun xiao",
    age: 18,
    avatar: "http://m.imeitou.com/uploads/allimg/2019032114/kjfjfrxjnjj.jpg",
    description:
      "Shall I compare thee to a summer's day Thou art more lovely and more temperate " +
      "Shall I compare thee to a summer's day Thou art more lovely and more temperate ",
  };
  const response = await postMethod(path, data);
  userId = response.data;
};

const addEducation = async (postMethod) => {
  path = `/users/${userId}/educations`;
  data = {
    year: 2020,
    title: "佛罗里达大学",
    description:
      "在佛罗里达大学取得了优异的成绩在佛罗里达大学取得了优异的成绩在佛罗里达大学取得了优异的成绩",
  };
  await postMethod(path, data);
  data = {
    year: 2020,
    title: "加州理工大学",
    description:
      "在加州理工大学获得了博士学位在加州理工大学获得了博士学位在加州理工大学获得了博士学位在加州理工大学获得了博士学位",
  };
  await postMethod(path, data);
};

const renderUserInfo = async (getMethod, desc, intro, avatar) => {
  path = `/users/${userId}`;
  const response = await getMethod(path);
  // TODO feedback: 不建议给参数赋值
  desc.innerHTML = `my name is ${response.data.name} and this is my resume/cv`;
  intro.innerHTML = response.data.description;
  avatar.src = response.data.avatar;
};

const renderEducations = async (getMethod, createDom) => {
  path = `/users/${userId}/educations`;
  const response = await getMethod(path);
  Object.values(response.data).map((item) =>
    container.appendChild(createDom(item.year, item.title, item.description))
  );
};

// TODO feedback: 准备数据的逻辑应该放在后台
addUser(postFunction).then(() => {
  addEducation(postFunction).then(() => {
    renderUserInfo(getFunction, descDom, introTextDom, avatarDom).then();
    renderEducations(getFunction, createDocument).then();
  });
});

export { addUser, addEducation, renderUserInfo, renderEducations };
