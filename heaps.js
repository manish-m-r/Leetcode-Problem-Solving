// log(n) time complexity.

var heapify = function (array) {
  n = parseInt(array.length / 2) - 1;

  while (n >= 0) {
    max = n;
    left = 2 * n + 1;
    right = 2 * n + 2;

    if (array[left] && array[left] > array[max]) {
      max = left;
    }
    if (array[right] && array[right] > array[max]) {
      max = right;
    }

    if (max != n) {
      [array[n], array[max]] = [array[max], array[n]];
    }
    n--;
  }

  return array;
};

var deleteFromHeap = function (array) {
  val = array.shift();
  heapify(array);

  return val === undefined ? undefined : val;
};

var insertToHeap = function (array, val) {
  array.push(val);
  heapify(array);
};

//var arr = [5, 7, 3, 9, 4, 6, 8];
//var heap = heapify(arr);
//deleteFromHeap(heap);
//insertToHeap(heap, 10);
//console.log(heap);

console.log("----------------------------------------------------------------");

var lastStoneWeight = function (stones) {
  var heap = heapify(stones);

  while (stones.length > 1) {
    max1 = deleteFromHeap(heap);
    max2 = deleteFromHeap(heap);

    if (max1 > max2) {
      insertToHeap(stones, max1 - max2);
    }
    console.log(stones);
  }

  return heap[0] === undefined ? 0 : heap[0];
};

//var stones = [2, 7, 4, 2, 8, 1];
//var data = lastStoneWeight(stones);
//console.log(data);

console.log("----------------------------------------------------------------");

// O(n + k)

var KclosestToOrigin = function (points, k) {
  var dict = {};
  var heap;
  var minPoints = [];
  var i = k;

  for ([x, y] of points) {
    val = Math.sqrt(x * x + y * y);

    if (val in dict) {
      dict[val].push([x, y]);
    } else {
      dict[val] = [[x, y]];
    }
  }

  distance = Object.keys(dict);
  heap = heapify(distance);

  while (k > 0) {
    member = deleteFromHeap(heap);
    for (mem of dict[member]) {
      minPoints.push(mem);
      k--;
    }
  }

  return minPoints.slice(0, i);
};

var points = [
  [1, 3],
  [-2, 2],
  [-1, -3],
];

//var data = KclosestToOrigin(points, 1);
//console.log(data);

console.log("----------------------------------------------------------------");

var taskSheduling = function (tasks, n) {
  //n is non negative cooling interval

  var dict = {};
  var i;

  for (t of tasks) {
    if (t in dict) {
      dict[t]++;
    } else {
      dict[t] = 1;
    }
  }

  frequency = Object.values(dict);
};

var tasks = ["A", "A", "A", "B", "B", "B"];
var data = taskSheduling(tasks, 0);
