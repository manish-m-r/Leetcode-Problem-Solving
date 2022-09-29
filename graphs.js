var numberofIslands = function (grid) {
  var row = grid.length;
  var col = grid[0].length;
  var res = 0;

  var dfs = function (r, c, grid) {
    if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === "0") {
      return;
    }

    grid[r][c] = "0";

    dfs(r + 1, c, grid);
    dfs(r, c + 1, grid);
    dfs(r - 1, c, grid);
    dfs(r, c - 1, grid);

    return;
  };

  for (r = 0; r < row; r++) {
    for (c = 0; c < col; c++) {
      if (grid[r][c] === "1") {
        dfs(r, c, grid);
        res++;
      }
    }
  }

  return res;
};

var grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
//var data = numberofIslands(grid);
//console.log(data);

console.log(
  "------------------------------------------------------------------"
);

var maxAreaOfIslands = function (grid) {
  var row = grid.length;
  var col = grid[0].length;
  var res = 0;

  var dfs = function (r, c, grid) {
    if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === "0") {
      return 0;
    }

    grid[r][c] = "0";

    res =
      1 +
      dfs(r + 1, c, grid) +
      dfs(r, c + 1, grid) +
      dfs(r - 1, c, grid) +
      dfs(r, c - 1, grid);

    return res;
  };

  for (r = 0; r < row; r++) {
    for (c = 0; c < col; c++) {
      if (grid[r][c] === "1") {
        res = Math.max(res, dfs(r, c, grid));
      }
    }
  }

  return res;
};

var grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

//var data = maxAreaOfIslands(grid);
//console.log(data);

console.log(
  "------------------------------------------------------------------"
);

var souuroundedRegions = function (grid) {
  var row = grid.length;
  var col = grid[0].length;

  var dfs = function (r, c) {
    if (r < 0 || r >= row || c < 0 || c >= col) {
      return;
    }
    if (grid[r][c] === "I" || grid[r][c] === "X") {
      return;
    }

    grid[r][c] = "I";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);

    return;
  };

  for (r = 0; r < row; r++) {
    if (grid[0][r] === "O") {
      dfs(0, r);
    }
    if (grid[row - 1][r] === "O") {
      dfs(row - 1, r);
    }
  }

  for (c = 0; c < col; c++) {
    if (grid[c][0] === "O") {
      dfs(c, 0);
    }
    if (grid[c][col - 1] === "O") {
      dfs(c, col - 1);
    }
  }

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (grid[i][j] === "I") {
        grid[i][j] = "O";
      } else if (grid[i][j] === "O") {
        grid[i][j] = "X";
      }
    }
  }

  return grid;
};

var grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

//var data = souuroundedRegions(grid);
//console.log(data);

console.log(
  "------------------------------------------------------------------"
);

var waterFlow = function (grid) {
  var row = grid.length;
  var col = grid[0].length;
  var pacific = {};
  var atlantic = {};
  var result = [];

  var dfs = function (r, c, ocean, point = grid[r][c]) {
    if (r < 0 || c < 0 || r >= row || c >= col) {
      return;
    }

    if (grid[r][c] < point) {
      return;
    }

    if ([r, c] in ocean) {
      return;
    }

    ocean[[r, c]] = true;

    dfs(r + 1, c, ocean, grid[r][c]);
    dfs(r, c + 1, ocean, grid[r][c]);
    dfs(r, c + 1, ocean, grid[r][c]);
    dfs(r, c - 1, ocean, grid[r][c]);

    return;
  };

  for (var c = 0; c < col; c++) {
    dfs(0, c, pacific);
    dfs(row - 1, c, atlantic);
  }

  for (var r = 0; r < row; r++) {
    dfs(r, 0, pacific);
    dfs(r, col - 1, atlantic);
  }

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if ([i, j] in pacific && [i, j] in atlantic) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

var grid = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

var data = waterFlow(grid);
console.log(data);

console.log(
  "------------------------------------------------------------------"
);

var rottingOranges = function (grid) {
  var row = grid.length;
  var col = grid[0].length;
  var queue = [];
  var fresh = 0;
  var time = 0;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
      if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  var directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length && fresh != 0) {
    n = queue.length;

    for (var k = 0; k < n; k++) {
      [x, y] = queue.shift();

      for (mem of directions) {
        r = mem[0] + x;
        c = mem[1] + y;

        if (r < 0 || r >= row || c < 0 || c > col || grid[r][c] != 1) {
          continue;
        } else {
          grid[r][c] = 2;
          fresh--;
          queue.push([r, c]);
        }
      }
    }
    time++;
  }

  if (fresh != 0) {
    return -1;
  }
  return time;
};

var grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
//var data = rottingOranges(grid);
//console.log(data);

console.log(
  "------------------------------------------------------------------"
);

var wallsAndGates = function (rooms) {
  var row = rooms.length;
  var col = rooms[0].length;
  var queue = [];

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  var directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    n = queue.length;

    for (var k = 0; k < n; k++) {
      [x, y] = queue.shift();

      for (mem of directions) {
        r = mem[0] + x;
        c = mem[1] + y;

        if (r < 0 || c < 0 || r >= row || c >= col || rooms[r][c] != "X") {
          continue;
        } else {
          rooms[r][c] = 1 + rooms[x][y];
          queue.push([r, c]);
        }
      }
    }
  }

  return rooms;
};

var rooms = [
  ["X", -1, 0, "X"],
  ["X", "X", "X", -1],
  ["X", -1, "X", -1],
  [0, -1, "X", "X"],
];

var data = wallsAndGates(rooms);
console.log(data);

console.log(
  "------------------------------------------------------------------"
);

var dfsOnCoursesSchedule = function (mem, dict, cycle = new Set()) {
  if (!dict[mem]) {
    return true;
  }
  if (cycle.has(Number(mem))) {
    return false;
  }

  cycle.add(Number(mem));

  for (member of dict[mem]) {
    if (!dfsOnCoursesSchedule(member, dict, cycle)) {
      return false;
    }
    delete dict[mem];
  }

  return true;
};

var canFinish = function (prerequisite) {
  var dict = {};
  for (member of prerequisite) {
    if (member[0] === member[1]) {
      return false;
    }

    if (member[0] in dict) {
      dict[member[0]].push(member[1]);
    } else {
      dict[member[0]] = [member[1]];
    }
  }

  console.log(dict);

  for (mem in dict) {
    if (!dfsOnCoursesSchedule(mem, dict)) {
      return false;
    }
  }

  return true;
};

var prerequisite = [
  [1, 0],
  [0, 3],
  [0, 2],
  [3, 2],
  [2, 5],
  [4, 5],
  [5, 6],
  [2, 4],
];

//var data = canFinish(prerequisite);
//console.log(data);

console.log(
  "------------------------------------------------------------------"
);

var dfsOnCoursesSchedule2 = function (mem, dict, res, cycle = new Set()) {
  if (!dict[mem]) {
    res.add(Number(mem));
    return true;
  }
  if (mem in cycle) {
    return false;
  }

  cycle.add(Number(mem));

  for (member of dict[mem]) {
    if (!dfsOnCoursesSchedule2(member, dict, res, cycle)) {
      return false;
    }
  }

  delete dict[mem];
  res.add(Number(mem));

  return true;
};

var canFinsih2 = function (prerequisite) {
  var dict = {};
  var res = new Set();

  for (member of prerequisite) {
    if (member[0] === member[1]) {
      return false;
    }
    if (member[0] in dict) {
      dict[member[0]].push(member[1]);
    } else {
      dict[member[0]] = [member[1]];
    }
  }

  for (mem in dict) {
    if (!dfsOnCoursesSchedule2(mem, dict, res)) {
      return false;
    }
  }
  return res;
};

var prerequisite = [
  [1, 0],
  [0, 3],
  [0, 2],
  [3, 2],
  [2, 5],
  [4, 5],
  [5, 6],
  [2, 4],
];
var data = canFinsih2(prerequisite);
console.log(data);

console.log(
  "------------------------------------------------------------------"
);

var dfsToFinish = function (mem, dict, cycle = new Set()) {
  if (!dict[mem]) {
    return;
  }

  if (cycle.has(mem)) {
    return;
  }

  cycle.add(mem);

  for (member of dict[mem]) {
    dfsToFinish(member, dict, cycle);
  }

  delete dict[mem];

  return;
};

var canFinish = function (components) {
  var dict = {};
  var count = 0;

  for (member of components) {
    if (member[0] in dict) {
      dict[member[0]].push(member[1]);
    } else {
      dict[member[0]] = [member[1]];
    }
  }

  for (mem in dict) {
    dfsToFinish(mem, dict);
    count++;
  }

  return count;
};

var components = [
  [1, 2],
  [2, 4],
  [7, 8],
];

var data = canFinish(components);
console.log(data);

console.log(
  "------------------------------------------------------------------"
);

class Node {
  constructor(val) {
    this.val = val === undefined ? null : val;
    this.neighbours = [];
  }
}

console.log(
  "------------------------------------------------------------------"
);
