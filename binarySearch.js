var binarySearchIndex = function (array, target) {
  var low = 0;
  var high = array.length - 1;
  var mid;

  while (low <= high) {
    mid = parseInt((low + high) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

//var array = [1, 2, 3, 4, 5, 6, 7];
//var data = binarySearchIndex(array, 7);
//console.log(data);

console.log("--------------------------------------------------------");

var search2DMatrix = function (matrix, target) {
  var row = matrix.length;
  var col = matrix[0].length;
  var res;
  var colArray = [];
  var rowArray = [];

  var binarySearch = function (array, target) {
    var low = 0;
    var high = array.length - 1;
    var mid;

    while (low <= high) {
      mid = parseInt((low + high) / 2);

      if (array[mid] === target) {
        return mid;
      }

      if (array[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  };

  if (target < matrix[0][0] || target > matrix[row - 1][col - 1]) {
    return -1;
  }

  for (var r = 0; r < row; r++) {
    colArray.push(matrix[r][col - 1]);
  }

  res = binarySearch(colArray, target);

  for (var c = 0; c < col; c++) {
    rowArray.push(matrix[res][c]);
  }

  if (matrix[res][binarySearch(rowArray, target)] === target) {
    return true;
  }

  return false;
};

var matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

var data = search2DMatrix(matrix, 5);
console.log(data);

console.log("--------------------------------------------------------");

var kokoEatingBananas = function (array, hours) {
  var max = Math.max(...array);

  var binarySearchHours = function () {
    var low = 0;
    var high = max;

    while (low <= high) {
      var mid = parseInt((low + high) / 2);
      var sum = 0;

      for (var i = 0; i < array.length; i++) {
        sum = sum + Math.ceil(array[i] / mid);
      }

      if (sum <= hours) {
        high = mid - 1;
      }

      if (sum > hours) {
        low = mid + 1;
      }
    }

    return low;
  };

  return binarySearchHours();
};

var array = [3, 6, 7, 11];
var data = kokoEatingBananas(array, 8);
console.log(data);

console.log("--------------------------------------------------------");

var searchRotatedArray = function (array, target) {
  var low = 0;
  var high = array.length - 1;
  var mid;

  while (low <= high) {
    mid = parseInt((low + high) / 2);

    if (array[mid] === target) {
      return mid + 1;
    }

    if (array[low] < array[mid]) {
      if (target >= array[low] && target < array[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target <= array[high] && target > array[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

var array = [4, 5, 6, 7, 8, 1, 2];
var data = searchRotatedArray(array, 2);
console.log(data);

console.log("--------------------------------------------------------");

var minRotatedArray = function (array) {
  var res = array[0];
  var low = 0;
  var high = array.length - 1;
  var mid;

  while (low <= high) {
    if (array[low] <= array[high]) {
      res = Math.min(res, array[low]);
      break;
    }

    mid = parseInt((low + high) / 2);
    res = Math.min(res, array[mid])

    if (array[low] <= array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return res;
};

var array = [3, 1, 2];
var data = minRotatedArray(array);
console.log(data);
