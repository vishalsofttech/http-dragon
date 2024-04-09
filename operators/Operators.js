export class Operators {
  static #getArrayOfNestedObject(string, data) {
    const keysInArray = string.split(".");
    if (keysInArray.length === 1) {
      return data[keysInArray[0]];
    } else {
      const startingValue = keysInArray[0];
      keysInArray.splice(0, 1);
      if (!data[startingValue]) {
        return undefined;
      }
      return Operators.#getArrayOfNestedObject(
        keysInArray.join("."),
        data[startingValue]
      );
    }
  }

  static map() {
    return (data) => {
      switch (arguments.length) {
        case 1:
          if (Array.isArray(data)) {
            for (let [index, element] of data.entries()) {
              data[index] = arguments[0](element);
            }
            return data;
          } else {
            return data;
          }
        case 2:
          const array = Operators.#getArrayOfNestedObject(arguments[0], data);
          if (Array.isArray(array)) {
            for (let [index, element] of array.entries()) {
              array[index] = arguments[1](element);
            }
            return data;
          } else {
            return data;
          }
      }
    };
  }

  static filter() {
    return (data) => {
      switch (arguments.length) {
        case 1:
          if (Array.isArray(data)) {
            return data.filter(arguments[0]);
          } else {
            return data;
          }
        case 2:
          const array = Operators.#getArrayOfNestedObject(arguments[0], data);
          if (Array.isArray(array)) {
            const filteredArray = array.filter(arguments[1]);
            array.splice(0,array.length,...filteredArray);
            return data;
          } else {
            return data;
          }
      }
    };
  }
}
