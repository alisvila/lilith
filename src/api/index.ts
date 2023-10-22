import axios from "axios";

function getLocalAccessToken() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
}
function getLocalRefreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  return refreshToken;
}

const Axios = axios.create({
  baseURL: "https://api.vazneman.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getLocalAccessToken()}`,
  },
});

Axios.interceptors.request.use(
  (config: any) => {
    const token = getLocalAccessToken();
    // we can check Expiration time here and get new token first
    if (token) {
      config.headers["Authorization"] = `Bearer ${getLocalAccessToken()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const OriginalConfig = err.config;
    if (err.response) {
      // Access Token was Expired
      if (err.response.status === 401 && !OriginalConfig._retry) {
        OriginalConfig._retry = true;
        try {
          const rs = await refreshToken();
          const { accessToken } = rs.data;
          localStorage.setItem("accessToken", accessToken);
          Axios.defaults.headers.common["Authorization"] = accessToken;
          return Axios(OriginalConfig);
        } catch (_error: any) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }
          return Promise.reject(_error);
        }
      }
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }
    return Promise.reject(err);
  }
);

function refreshToken() {
  return Axios.post("auth/refreshtoken", {
    refreshToken: getLocalRefreshToken(),
  });
}

export const sendRequest = async ({
  auth,
  url,
  params = {},
  method = "GET",
  body = "",
  headers = {},
} : any) => {
  let options :any = {
    url: url,
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: getLocalAccessToken() || auth,
      ...headers,
    },
  };
  if (method !== "GET") {
    options.data = body;
  }
  return new Promise((resolve, reject) => {
    Axios(options)
      .then((response) => {
        if (response?.status === 200) {
          resolve(response.data);
        }
      })
      .catch((err) => {
        console.log(`request to ${url} has been refused with error: ${err}`);
        reject(err);
      });
  });
};

export default Axios;
