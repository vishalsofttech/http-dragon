import { Post } from "../VerbClass/Post";
import { Get } from "../VerbClass/Get";
import { Delete } from "../VerbClass/Delete";
import { Put } from "../VerbClass/Put";
import { Patch } from "../VerbClass/Patch";
import { ForVerbs } from "../utils/ForVerbs";

export class HttpManyVerbs extends ForVerbs {
  apiBundle = [];

  addPostRequest = (api, body = null, headers = null, params = null) => {
    const request = new Post(this.givesApi(api));
    request.setBody(body);
    request.setHeaders(headers);
    request.setParams(params);
    this.apiBundle.push(request);
  };

  addGetRequest = (api, headers = null, params = null) => {
    const request = new Get(this.givesApi(api));
    request.setHeaders(headers);
    request.setParams(params);
    this.apiBundle.push(request);
  };

  addDeleteRequest = (api, headers = null, params = null) => {
    const request = new Delete(this.givesApi(api));
    request.setHeaders(headers);
    request.setParams(params);
    this.apiBundle.push(request);
  };

  addPutRequest = (api, body = null, headers = null, params = null) => {
    const request = new Put(this.givesApi(api));
    request.setBody(body);
    request.setHeaders(headers);
    request.setParams(params);
    this.apiBundle.push(request);
  };

  addPatchRequest = (api, body = null, headers = null, params = null) => {
    const request = new Patch(this.givesApi(api));
    request.setBody(body);
    request.setHeaders(headers);
    request.setParams(params);
    this.apiBundle.push(request);
  };

  callApiStack = ({ next, error }) => {
    const promiseBundle = [];
    for (let request of this.apiBundle) {
      promiseBundle.push(request.getApiPromise());
    }
    Promise.all(promiseBundle)
      .then((res) => {
        next(res);
      })
      .catch((err) => {
        error(err);
      });
  };

  callApiStackSync = async ({next,error}) => {
    for (let request of this.apiBundle) {
      try {
        await request.getApiPromise()
      } catch (Err) {
        break;
      }
    }

  }
}
