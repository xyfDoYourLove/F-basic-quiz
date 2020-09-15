import "./style/index.scss";
import getFunction from "./Introduction/action";
import createDocument from "./Introduction/render";

const desc = document.getElementById("desc");
const avatar = document.getElementById("avatar");
const container = document.getElementById("educations");

const renderUserInfo = async () => {
  const path = `/users/1600157923805`;
  const response = await getFunction(path);
  desc.innerHTML = `my name is ${response.data.name} and this is my resume/cv`;
  avatar.src = response.data.avatar;
};

const renderEducations = async () => {
  const path = `/users/1600157923805/educations`;
  const response = await getFunction(path);
  Object.values(response.data).map((item) =>
    container.appendChild(
      createDocument(item.year, item.title, item.description)
    )
  );
};

renderUserInfo().then();
renderEducations().then();
