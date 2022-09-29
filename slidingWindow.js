var stockMaxProfit = function (array) {
  var leftWindow = 0;
  var rightWindow = leftWindow + 1;
  var profit = 0;

  while (rightWindow < array.length) {
    if (array[leftWindow] >= array[rightWindow]) {
      leftWindow = rightWindow;
    } else {
      profit = Math.max(profit, array[rightWindow] - array[leftWindow]);
    }

    rightWindow++;
  }

  return profit;
};

//var array = [7, 6, 4, 3, 1];
//var data = stockMaxProfit(array);
//console.log(data);

console.log(
  "-------------------------------------------------------------------"
);

var longestNonRepeatingCharacter = function (string) {
  var set = new Set();
  var lw = 0;
  var rw = lw;
  var count = 0;

  while (rw < string.length) {
    while (set.has(string[rw])) {
      set.delete(string[lw]);
      lw++;
    }

    set.add(string[rw]);
    count = Math.max(count, rw - lw + 1);
    rw++;
  }
  return count;
};

//var s = "abcc";
//var data = longestNonRepeatingCharacter(s);
//console.log(data);

console.log(
  "-------------------------------------------------------------------"
);

var characterReplacement = function (string, k) {
  var count = new Array(26).fill(0);
  var sw = 0;
  var ew = sw;
  var maxCount;
  var max = 0;
  while (ew < string.length) {
    count[string.charCodeAt(ew) - "A".charCodeAt(0)]++;
    maxCount = Math.max(...count);

    while (ew - sw + 1 - maxCount > k) {
      count[string.charCodeAt(sw) - "A".charCodeAt(0)]--;
      sw++;
    }

    max = Math.max(max, ew - sw + 1);
    ew++;
  }

  return max;
};

//var string = "AABABBA";
//var data = characterReplacement(string, 2);
//console.log(data);

console.log(
  "-------------------------------------------------------------------"
);

var checkPermuations = function (s1, s2) {
  var count = new Array(26).fill(0);

  for (mem of s2) {
    count[mem.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  var sw = 0;
  var ew;

  while (sw < s1.length) {
    if (count[s1.charCodeAt(sw) - "a".charCodeAt(0)] > 0) {
      var countMe = new Array(26).fill(0);
      var length = sw + s2.length;
      ew = sw;

      while (ew < length && ew < s1.length) {
        countMe[s1.charCodeAt(ew) - "a".charCodeAt(0)]++;
        ew++;
      }

      if (JSON.stringify(count) === JSON.stringify(countMe)) {
        return true;
      }
    }

    sw++;
  }

  return false;
};

//var s1 = "manishmysorerajeshgangadhar";
//var s2 = "roesym"
//var data = checkPermuations(s1, s2);
//console.log(data);

console.log(
  "-------------------------------------------------------------------"
);


