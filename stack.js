var validParanteses = function (string) {
  var dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  var stack = [];

  for (mem of string) {
    if (mem in dict) {
      if (stack[stack.length - 1] === dict[mem]) {
        stack.pop();
      }
    } else {
      stack.push(mem);
    }
  }

  return stack.length === 0 ? true : false;
};

var string = "([])";
var data = validParanteses(string);
console.log(data);

console.log("------------------------------------------------------");

var evaluateExpressions = function (array) {
  var stack = [];
  var right, left;

  for (mem of array) {
    if (isNaN(mem)) {
      right = stack.pop();
      left = stack.pop();

      switch (mem) {
        case "+":
          stack.push(Number(left) + Number(right));
          break;

        case "-":
          stack.push(Number(left) - Number(right));
          break;

        case "*":
          stack.push(Number(left) * Number(right));
          break;

        case "/":
          stack.push(parseInt(Number(left) / Number(right)));
          break;
      }
    } else {
      stack.push(mem);
    }
  }

  return stack[0];
};

//var array = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
//var data = evaluateExpressions(array);
//console.log(data);

console.log("------------------------------------------------------");

var generateParantheses = function (n) {
  var res = [];
  var stack = [];

  var backTrack = function (open, closed) {
    if (open === closed && closed === n) {
      res.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      backTrack(open + 1, closed);
      stack.pop();
    }

    if (closed < open) {
      stack.push(")");
      backTrack(open, closed + 1);
      stack.pop();
    }
  };

  backTrack(0, 0);

  return res;
};

//var data = generateParantheses(3);
//console.log(data);

console.log("------------------------------------------------------");

var temperatureIncrease = function (array) {
  var stack = [];
  var index, value;
  var res = new Array(array.length).fill(0);

  for (var i = 0; i < array.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][1] < array[i]) {
      [index, value] = stack.pop();
      res[index] = i - index;
    }

    stack.push([i, array[i]]);
  }

  return res;
};

var array = [73, 74, 77, 75, 79];
var data = temperatureIncrease(array);
console.log(data);
