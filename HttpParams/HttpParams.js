
class HttpParams {
  
  static #values = {};

  static append(key,value) {
     
  }

  static set(key,value) {
    return {...HttpParams.#values,[key]:value}  
  }
  
}