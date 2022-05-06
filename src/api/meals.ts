import { sendRequest } from "./index";

// NOTE: not implemented by backend
const createMeal = (payload: any) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: "/Meals",
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

const getMeals = (id: number) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: `/Meals`,
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

// NOTE: not implemented by backend
const updateMeal = (payload: any) => {
  return new Promise((resolve, reject) => {
    sendRequest({
      url: `/Meals`,
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
    createMeal,
    getMeals,
    updateMeal
};
