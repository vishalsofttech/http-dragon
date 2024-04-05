import { Methods } from "./Verbs";

export class Http extends Methods {
  static apis = null;
  static baseUrl = null;
  static loader = () => {};

  //set the apis object for further uses;
  static setApis(apis) {
    Http.apis = apis;
  }

  static setBaseUrl(baseUrl) {
    Http.baseUrl = baseUrl;
  }
}

export const http = new Http();
