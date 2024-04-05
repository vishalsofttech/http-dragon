import axios from "axios";

export class Get {
  #headers = null;
  #params = null;
  #api = null;
  #pipes = [];

  constructor(api) {
    this.#api = api;
  }

  setPipe = (method) => {
    this.#pipes.push(method);
  };

  setParams = (params) => {
    this.#params = params;
  };

  setHeaders = (headers) => {
    this.#headers = headers;
  };

  getApiPromise = () => {
    return axios.get(this.#api, {
      params: this.#params,
      headers: this.#headers,
    });
  };

  #pipeRunner = (responseData) => {
    if (this.#pipes.length > 0) {
      for (let pipeMethod of this.#pipes) {
        responseData = pipeMethod(responseData);
      }
      return responseData;
    }
    return null;
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
      const response = await axios.get(this.#api, {
        params: this.#params,
        headers: this.#headers,
      });

      const data = this.#pipeRunner(response.data);
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
