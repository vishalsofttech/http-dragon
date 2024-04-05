import { Http } from "../Http";

export class ForVerbs {
  givesApi = (api) => {
    if (!Http.baseUrl) {
      return api;
    }
    return Http.baseUrl + api;
  };
}
