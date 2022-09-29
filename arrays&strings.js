

var containsdup = function (s) {
  var dict = {};

  for (mem of s) {
    if (mem in dict) {
      return true;
    }
    dict[mem] = true;
  }

  return false;
};

var s = "manish";
var data = containsdup(s);
console.log(data);

console.log("-----------------------------------------------------");

var checkPalindrome = function (s) {
  var i = 0;
  var j = s.length - 1;

  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }
  if (i === j || i > j) {
    return true;
  }

  return false;
};

var s = "aaaam";
var data = checkPalindrome(s);
console.log(data);

console.log("-----------------------------------------------------");

var checkAnangram = function (s1, s2) {
  var convertToMap = function (s) {
    var dict = {};
    for (mem of s) {
      if (mem in dict) {
        dict[mem]++;
      } else {
        dict[mem] = 1;
      }
    }
    return dict;
  };

  var data1 = convertToMap(s1);
  var data2 = convertToMap(s2);

  for (mem in data1) {
    if (data1[mem] != data2[mem]) {
      return false;
    }

    delete data1[mem];
    delete data2[mem];
  }

  if (Object.keys(data2).length) {
    return false;
  }

  return true;
};

var s1 = "manish";
var s2 = "hanmis";
var data = checkAnangram(s1, s2);
console.log(data);

console.log("-----------------------------------------------------");

var twoSum = function (array, target) {
  var dict = {};
  for (i in array) {
    var key = target - array[i];
    if (array[i] in dict) {
      return [Number(dict[array[i]]), Number(i)];
    } else {
      dict[key] = i;
    }
  }

  return false;
};

var array = [2, 7, 15, 18];
var target = 9;
var data = twoSum(array, target);
console.log(data);

console.log("-----------------------------------------------------");

var groupAnagarams = function (strs) {
  var dict = {};
  var result = [];
  for (mem of strs) {
    var count = new Array(26).fill(0);
    for (i in mem) {
      count[mem.charCodeAt(i) - 97]++;
    }
    if (count in dict) {
      dict[count].push(mem);
    } else {
      dict[count] = [mem];
    }
  }

  for (data in dict) {
    result.push(dict[data]);
  }

  return result;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var data = groupAnagarams(strs);
console.log(data);

console.log("-----------------------------------------------------");

var topKfrequent = function (array, k) {
  var dict = {};
  var result = [];

  for (mem of array) {
    if (mem in dict) {
      dict[mem]++;
    } else {
      dict[mem] = 1;
    }
  }

  var count = new Array(Math.max(...Object.values(dict)) + 1).fill(null);

  for (mem in dict) {
    count[dict[mem]] = mem;
  }

  for (var i = count.length - 1; i >= 0; i--) {
    if (k === 0) {
      return result;
    }

    if (count[i] != null) {
      result.push(Number(count[i]));
      k--;
    }
  }
};

var array = [2, 2, 2, 3, 1, 1, 1, 1, 3, 3, 1, 7, 7, 7, 7, 7, 7];
var data = topKfrequent(array, 2);
console.log(data);

console.log("-----------------------------------------------------");

var validSuduku = function (board) {
  var rows = {};
  var cols = {};
  var boxs = {};

  for (var i = 0; i < 9; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
  }

  for (var j = 0; j < 3; j++) {
    for (var k = 0; k < 3; k++) {
      boxs[[j, k]] = new Set();
    }
  }

  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      }

      if (
        rows[r].has(board[r][c]) ||
        cols[c].has(board[r][c]) ||
        boxs[[parseInt(r / 3), parseInt(c / 3)]].has(board[r][c])
      ) {
        return false;
      }

      rows[r].add(board[r][c]);
      cols[c].add(board[r][c]);
      boxs[[parseInt(r / 3), parseInt(c / 3)]].add(board[r][c]);
    }
  }

  return true;
};

var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
var data = validSuduku(board);
console.log(data);

console.log("-----------------------------------------------------");

var longestConsecutive = function (nums) {
    var set = new Set(nums);
    var result = 0;
    for (mem of set) {
      var count = 1;
      var member = mem + 1;

      if (!set.has(mem - 1)) {
        while (set.has(member)) {
          count++;
          member++;
        }
        result = Math.max(result, count);
      }
    }

    return result;
};

var nums = [100, 4, 200, 1, 3, 2];
var data = longestConsecutive(nums);
console.log(data);
