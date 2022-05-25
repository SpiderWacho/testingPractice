function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1, string.length);
}

function reverseString(string) {
  const length = string.length - 1;
  let reversed = "";
  for (let i = length; i >= 0; i -= 1) {
    reversed += string[i];
  }
  return reversed;
}

const calculator = {
  sum: (a, b) => a + b,
  substract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function cipher(string, offset = 1) {
  const { length } = string;
  let returnedText = "";
  for (let i = 0, j = length; i < j; i += 1) {
    if (RegExp(/[.,/#!$%^&*;:{}=\-_`~()]/g, "", " ").test(string[i])) {
      returnedText += string[i];
    } else if (string[i] === " ") {
      returnedText += string[i];
    } else {
      if (string[i] === string[i].toUpperCase()) {
        returnedText += String.fromCharCode(
          ((string.charCodeAt([i]) - 65 + offset) % 26) + 65
        );
      }
      returnedText += String.fromCharCode(
        ((string.charCodeAt([i]) - 97 + offset) % 26) + 97
      );
    }
  }

  return returnedText;
}

function analizeArray(arr) {
  const { length } = arr;

  function getMin() {
    let currentMin = 0;
    let currentNumber = 0;
    for (let i = 0, j = length; i < j; i += 1) {
      currentNumber = arr[i];
      if (i === 0) {
        currentMin = currentNumber;
      }
      if (currentNumber < currentMin) {
        currentMin = currentNumber;
      }
    }
    return currentMin;
  }
  function getMax() {
    let currentMax = 0;
    let currentNumber = 0;
    for (let i = 0, j = length; i < j; i += 1) {
      currentNumber = arr[i];
      if (i === 0) {
        currentMax = currentNumber;
      }
      if (currentNumber > currentMax) {
        currentMax = currentNumber;
      }
    }
    return currentMax;
  }

  function getAverage() {
    let average = 0;
    for (let i = 0, j = length; i < j; i += 1) {
      average += arr[i];
    }
    average /= length;
    return average;
  }
  const result = {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length,
  };
  return result;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  cipher,
  analizeArray,
};
