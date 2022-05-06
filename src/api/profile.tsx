import { sendRequest } from "./index";

const createProfile = (payload: any) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: "/Person",
      method: "POST",
      body: payload,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getProfile = (id: number) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: `/Person/${id}`,
      method: "GET",
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const updateProfile = (payload: any) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: `/Person`,
      method: "PATCH",
      body: payload,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {
  createProfile,
  getProfile,
  updateProfile,
};
