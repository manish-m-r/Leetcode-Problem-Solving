var climbstairs = function (n) {
  var dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (var i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

var data = climbstairs(5);
console.log(data);

console.log(
  "-----------------------------------------------------------------"
);
// Draw decision tree, you will have to follow a bottom-up approach.
// Start from end of the stairs.
// Find minimum cost from the end for each dp element by takingone or two steps.

var minCostClimbingStairs = function (cost) {
  var dp = [];

  n = cost.length - 1;

  dp[n] = cost[n];
  dp[n - 1] = cost[n - 1];

  for (i = n - 2; i >= 0; i--) {
    dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
  }

  return Math.min(dp[0], dp[1]);
};

var cost = [10, 15, 20];
var data = minCostClimbingStairs(cost);
console.log(data);

console.log(
  "-----------------------------------------------------------------"
);

var houseRobber1 = function (houses) {
  var dp = [];
  dp[0] = houses[0];
  dp[1] = Math.max(dp[0], houses[1]);

  for (var i = 2; i < houses.length; i++) {
    dp[i] = Math.max(houses[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[dp.length - 1];
};

var houses = [2, 7, 9, 3, 1];
var data = houseRobber1(houses);
console.log(data);

console.log(
  "-----------------------------------------------------------------"
);

//To rob houses alternate to each other and in circle, start by:
// from 1st house and not consider the last.
// from 2nd house and consider the last, but do not consider 1st house
// return max of last elements of two dp sum array..

var houseRobber2 = function (houses2) {
  var dp1 = [];
  var dp2 = [];

  dp1[0] = houses2[0];
  dp1[1] = Math.max(dp1[0], houses2[1]);

  dp2[1] = houses2[1];
  dp2[2] = Math.max(dp2[1], houses2[2]);

  for (var i = 2; i < houses2.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2] + houses2[i], dp1[i - 1]);
  }

  for (var j = 3; j < houses2.length; j++) {
    dp2[i] = Math.max(dp2[i - 2] + houses2[i], dp2[i - 1]);
  }

  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
};

var houses2 = [1, 2, 3, 1];
var data = houseRobber2(houses2);
console.log(data);

console.log(
  "-----------------------------------------------------------------"
);

var longestPalindromicSubstring = function (s) {
  var res = "";

  for (var i = 0; i < s.length; i++) {
    //For Odd length strings
    low = i;
    high = i;

    while (low >= 0 && high < s.length && s[low] === s[high]) {
      if (high - low + 1 > res.length) {
        res = s.substring(low, high + 1);
      }
      //res = Math.max(res, high - low + 1)
      low--;
      high++;
    }

    //For Even length strings
    low = i;
    high = i + 1;
    while (low >= 0 && high < s.length && s[low] === s[high]) {
      if (high - low + 1 > res.length) {
        res = s.substring(low, high + 1);
      }
      //res = Math.max(res, high - low + 1)
      low--;
      high++;
    }
  }

  return res;
};

var data = longestPalindromicSubstring("cbbd");
console.log(data);
