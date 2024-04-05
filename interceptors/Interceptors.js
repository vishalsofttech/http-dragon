import axios from "axios";

export class Interceptors {
  static addRequestInterceptor(onFullFilled, onRejected) {
    axios.interceptors.request.use(onFullFilled, onRejected);
  }

  static addResponseInterceptor(onFullFilled, onRejected) {
    axios.interceptors.response.use(onFullFilled, onRejected);
  }
}
