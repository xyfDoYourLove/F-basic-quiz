import "./style/index.scss";
import getUserInfo from "./Introduction/action";

const desc = document.getElementById("desc");
const avatar = document.getElementById("avatar");

const renderUserInfo = async () => {
  const response = await getUserInfo();
  desc.innerHTML = `my name is ${response.data.name} and this is my resume/cv`;
  avatar.src = response.data.avatar;
};

renderUserInfo().then();

