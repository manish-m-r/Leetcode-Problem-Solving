var twoSum = function (array, target) {
  var low = 0;
  var high = array.length - 1;

  while (low < high) {
    sum = array[low] + array[high];

    if (sum > target) {
      high--;
    } else if (sum < target) {
      low++;
    } else {
      return [low + 1, high + 1];
    }
  }

  return false;
};

//var array = [2, 5, 7, 9, 11];
//var target = 18;
//var data = twoSum(array, target);
//console.log(data);

console.log("---------------------------------------------------------");

var threeSum = function (array, target) {
  for (var i = 0; i < array.length; i++) {
    var low = i + 1;
    var high = array.length - 1;

    while (low < high) {
      var sum = array[i] + array[low] + array[high];

      if (sum > target) {
        high--;
      } else if (sum < target) {
        low++;
      } else {
        return [i + 1, low + 1, high + 1];
      }
    }
  }

  return false;
};

//var array = [1, 2, 3, 4, 5, 6, 7, 8];
//var target = 20;
//var data = threeSum(array, target);
//console.log(data);

console.log("---------------------------------------------------------");

var mostWater = function (array) {
  var low = 0;
  var high = array.length - 1;
  var max = 0;

  while (low < high) {
    max = Math.max(max, (high - low) * Math.min(array[high], array[low]));
    if (array[low] > array[high]) {
      high--;
    } else {
      low++;
    }
  }
  return max;
};

//var array = [1, 8, 11, 2, 5, 4, 8, 3, 11, 2];
//var data = mostWater(array);
//console.log(data);

console.log("---------------------------------------------------------");

var trap = function (height) {
  var low = 0;
  var high = height.length - 1;
  var leftMax = height[low];
  var rightMax = height[high];
  var result = 0;

  while (low < high) {
    if (height[low] < height[high]) {
      low++;
      leftMax = Math.max(leftMax, height[low]);
      result += leftMax - height[low];
    } else {
      high--;
      rightMax = Math.max(rightMax, height[high]);
      result += rightMax - height[high];
    }
  }

  return result;
};

//var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
//var data = trap(height);
//console.log(data);
