import axios from "axios";

export class Put {
  #headers = null;
  #params = null;
  #api = null;
  #body = null;
  #pipes = [];

  constructor(api) {
    this.#api = api;
  }

  setBody = (body) => {
    this.#body = body;
  };

  setParams = (params) => {
    this.#params = params;
  };

  setHeaders = (headers) => {
    this.#headers = headers;
  };

  #pipeRunner = (responseData) => {
    responseData = JSON.parse(responseData);
    if (this.#pipes.length > 0) {
      for (let pipeMethod of this.#pipes) {
        responseData = pipeMethod(responseData);
      }
      return responseData;
    }
    return null;
  };

  getApiPromise = () => {
    return axios.put(this.#api, this.#body, {
      params: this.#params,
      headers: this.#headers,
    });
  };

  call = async (config) => {
    if (!config) {
      return;
    }
    const { next = null, error = () => {}, raw = () => {} } = config;

    if (!next) {
      return;
    }

    try {
      const response = await axios.put(this.#api, this.#body, {
        params: this.#params,
        headers: this.#headers,
      });
      const data = this.#pipeRunner(JSON.stringify(response.data));
      if (data === null) {
        next(response);
        raw(response);
      } else {
        next(data);
        raw(response);
      }
    } catch (err) {
      error(err);
    }
  };
}
