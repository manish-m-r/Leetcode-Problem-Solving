//Method: Have a decision tree to add i'th element in the array or not add the i'th element to subset,
// till the end of the array and push the subset array to result array.

var subset = function (array) {
  //reccursive approach
  var res = [];

  var dfs = function (i, subset = []) {
    if (i >= array.length) {
      res.push([...subset]);
      return;
    }

    dfs(i + 1, subset.concat(array[i]));

    dfs(i + 1, subset);

    return;
  };

  dfs(0);
  return res;
};

//Unique Elements
//var array = [1, 2, 3];
//var data = subset(array);
//console.log(data);

console.log(
  "------------------------------------------------------------------------------------"
);

var combinationSum = function (candidates, target) {
  var res = [];
  var dfs = function (i, total = 0, subset = []) {
    if (total === target) {
      res.push([...subset]);
      return;
    }

    if (total > target || i >= array.length) {
      return;
    }

    dfs(i, candidates[i] + total, subset.concat(candidates[i]));

    dfs(i + 1, total, subset);

    return;
  };

  dfs(0);
  return res;
};

//var array = [2, 3, 6, 7];
//var data = combinationSum(array, 7);
//console.log(data);

console.log(
  "------------------------------------------------------------------------------------"
);

var permutationCode = function (array) {
  var res = [];

  var dfs = function (nums, subset = []) {
    if (!nums.length) {
      res.push([...subset]);
      return;
    }

    for (var i = 0; i < nums.length; i++) {
      var a = nums.shift();
      dfs(nums, subset.concat(a));
      nums.push(a);
    }

    return;
  };

  dfs(array);
  return res;
};

//var array = [1, 2, 3];
//var data = permutationCode(array);
//console.log(data);

console.log(
  "------------------------------------------------------------------------------------"
);

var subset2 = function (array) {
  //reccursive approach
  var res = [];
  array.sort();

  var dfs = function (i, subset = []) {
    if (i >= array.length) {
      res.push([...subset]);
      return;
    }

    dfs(i + 1, subset.concat(array[i]));

    while (i < array.length && array[i] === array[i + 1]) {
      i++;
    }

    dfs(i + 1, subset);

    return;
  };

  dfs(0);
  return res;
};

//var array = [2, 1, 2];
//var data = subset2(array);
//console.log(data);

console.log(
  "------------------------------------------------------------------------------------"
);

var combinationSum2 = function (candidates, target) {
  var res = [];
  var dfs = function (i, total = 0, subset = []) {
    if (total === target) {
      res.push([...subset]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    dfs(i + 1, candidates[i] + total, subset.concat(candidates[i]));

    while (i < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }

    dfs(i + 1, total, subset);

    return;
  };

  dfs(0);
  return res;
};

//var candidates = [10, 1, 2, 7, 6, 1, 5];
//var data = combinationSum2(candidates, 8);
//console.log(data);

console.log(
  "------------------------------------------------------------------------------------"
);

var isPalindrome = function (s) {
  var low = 0;
  var high = s.length - 1;

  while (low < high) {
    if (s[low] != s[high]) {
      return false;
    }

    low++;
    high--;
  }

  return true;
};

var palindromePartition = function (s) {
  var res = [];
  var dfs = function (s, subset = []) {
    if (!s.length) {
      res.push(subset);
      return;
    }

    for (var i = 0; i < s.length; i++) {
      var a = s.substring(0, i + 1);
      if (isPalindrome(a)) {
        dfs(s.substring(i + 1), subset.concat(a));
      }
    }

    return;
  };

  dfs(s);
  return res;
};

//var s = "aab";
//var data = palindromePartition(s);
//console.log(data);

console.log(
  "------------------------------------------------------------------------------------"
);

var letterCombination = function (digits) {
  var map = {
    2: ["a", "b", "c"],
    3: ["c", "d", "e"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  var res = [];

  var dfs = function (i, digits, s = "") {
    if (i >= digits.length) {
      res.push(s);
      return;
    }

    for (mem of map[digits[i]]) {
      dfs(i + 1, digits, s + mem);
    }

    return;
  };

  dfs(0, digits);
  return res;
};

//var string = "8";
//var data = letterCombination(string);
//console.log(data);

console.log(
  "------------------------------------------------------------------------------------"
);

var wordSearch = function (board, word) {
  var row = board.length;
  var col = board[0].length;

  var dict = {};

  var dfs = function (r, c, i) {
    if (i >= word.length) {
      return true;
    }

    if (
      r < 0 ||
      r >= row ||
      c < 0 ||
      c >= col ||
      [r, c] in dict ||
      word[i] != board[r][c]
    ) {
      return false;
    }

    dict[[r, c]] = true;

    res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    delete dict[[r, c]];

    return res;
  };

  for (var r = 0; r < row; r++) {
    for (var c = 0; c < col; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};

var board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

//var word = "ABFSA";
//var data = wordSearch(board, word);
//console.log(data);
