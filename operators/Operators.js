export class Operators {
  static map = (callBack) => {
    return (data) => {
      if (Array.isArray(data)) {
        for (let element of data) {
          element = callBack(element);
        }
        return data;
      } else {
        return data;
      }
    };
  };

  static filter = (callBack) => {
    return (data) => {
      if (Array.isArray(data)) {
        return data.filter(callBack);
      } else {
        return data;
      }
    };
  };
}
