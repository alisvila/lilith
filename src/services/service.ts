import axios from "axios";

interface IApi {
  post: (url: string, payload: any) => any;
  get: (url: string, payload: any) => any;
  delete: (url: string, payload: any) => any;
  patch: (url: string, payload: any) => any;
  setup: (baseURL: string, headers: Object) => void;
}

export class Service {
  private BASE_URL: string = "";
  private headers: Object = {};
  private apiExecuter!: IApi;

  public setBaseUrl(newUrl: string) {
    this.BASE_URL = newUrl;
    return this;
  }

  public setHeaders(newHeaders: Object) {
    this.headers = newHeaders;
    return this;
  }

  public setApiExecuter(newExecuter: IApi) {
    this.apiExecuter = newExecuter;
    return this;
  }

  public buildApi() {
    this.apiExecuter.setup(this.BASE_URL, this.headers);
    return this;
  }

  async get(url: string, payload?: any) {
    this.apiExecuter.get(url, payload);
  }

  async delete(url: string, payload: any) {}

  async patch(url: string, payload: any) {}

  async post(url: string, payload: any) {}
}

export class AxiosApi implements IApi {
  private baseURL: string = "";
  private headers: Object = {};

  setup(baseURL: string, headers: Object) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  async post(url: string, payload: any) {}

  async get(url: string, payload?: any) {
    const res = await axios.get(url, payload);
    console.log(res);
  }

  async delete(url: string, payload: any) {}

  async patch(url: string, payload: any) {}
}

class FetchApi implements IApi {
  private baseURL: string = "";
  private headers: Object = {};

  setup(baseURL: string, headers: Object) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  async post(url: string, payload: any) {}

  async get(url: string, payload?: any) {
    const res = await fetch(url);
    console.log(await res.json());
  }

  async delete(url: string, payload: any) {}

  async patch(url: string, payload: any) {}
}

const service = new Service();

const api = service
  .setBaseUrl("/v1")
  .setHeaders({ "Content-type": "application/json" })
  .setApiExecuter(new FetchApi())
  .buildApi();

export default api;
