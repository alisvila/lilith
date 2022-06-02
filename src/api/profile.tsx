import { sendRequest } from "./index";

export const createProfile = (uri: string, payload: any) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: uri,
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

export const getProfile = (uri: string) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: uri,
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

export const getSingleProfile = (uri: string, id?: string) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: `${uri}/${id}`,
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

export const deleteSingleProfile = (uri: string, id?: string) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: `${uri}/${id}`,
      method: "DELETE",
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateProfile = (uri: string, payload: any) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: uri,
      method: "PUT",
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
  deleteSingleProfile
};
