import {afterEach, describe, jest, test} from "@jest/globals";
import axios from "axios";
import { getFunction, postFunction } from "../Introduction/action";

jest.mock("axios");

describe("action", () => {
  afterEach(() => {
    jest.resetModules();
  });
  test("should get user data with mock axios get", async () => {
    const response = { data: { name: "xiao" } };
    const path = `/users`;
    axios.get.mockResolvedValue(response);
    await expect(getFunction(path)).resolves.toEqual(response);
  });
  test("should get error data with mock error", async () => {
    const path = `/users`;
    axios.get = jest.fn().mockRejectedValue({
      message: "网络错误",
    });
    // eslint-disable-next-line no-unused-expressions
    await expect(getFunction(path)).rejects.not.toEqual({
      Error: { message: "网络错误" },
    });
  });
  test("should get educations data with mock axios get", async () => {
    const response = { data: { name: "xiao" } };
    const path = `/users`;
    axios.post.mockResolvedValue(response);
    await expect(postFunction(path)).resolves.toEqual(response);
  });
  test("should get error data with mock axios get", async () => {
    const path = `/users`;
    axios.post = jest.fn().mockRejectedValue({
      message: "网络错误",
    });
    // eslint-disable-next-line no-unused-expressions
    await expect(postFunction(path)).rejects.not.toEqual({
      Error: { message: "网络错误" },
    });
  });
});
