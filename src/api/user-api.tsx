import { sendRequest } from "./index";

const login = (payload: any) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: "/user/login",
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

export default {
  login 
}