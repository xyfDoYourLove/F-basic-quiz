// eslint-disable-next-line import/no-extraneous-dependencies
import { afterEach, describe, jest, test } from "@jest/globals";
import { addEducation, addUser, renderUserInfo } from "../app";

describe("addUser", () => {
  afterEach(() => {
    jest.resetModules();
  });
  test("postFunction should beCalled when addUser", async () => {
    const response = { data: { id: "111" } };
    const mockPostFunction = jest.fn().mockReturnValue(response);
    await addUser(mockPostFunction);
    expect(mockPostFunction).toBeCalled();
    expect(mockPostFunction).toBeCalledTimes(1);
  });
});

describe("addEducation", () => {
  afterEach(() => {
    jest.resetModules();
  });
  test("postFunction should beCalled when addEducation", async () => {
    const mockPostFunction = jest.fn();
    await addEducation(mockPostFunction);
    expect(mockPostFunction).toBeCalled();
    expect(mockPostFunction).toBeCalledTimes(2);
  });
});

describe("renderUserInfo", () => {
  afterEach(() => {
    jest.resetModules();
  });
  test("getFunction should beCalled when renderUserInfo", async () => {
    const response = {
      data: { name: "111", description: "111", avatar: "111" },
    };
    const mockGetFunction = jest.fn().mockReturnValue(response);
    const desc = { innerHtml: null };
    const avatar = { src: null };
    const intro = { innerHtml: null };
    await renderUserInfo(mockGetFunction, desc, intro, avatar);
    expect(mockGetFunction).toBeCalled();
    expect(mockGetFunction).toBeCalledTimes(1);
  });
});
