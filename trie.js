class TrieNode {
  constructor() {
    this.dict = {};
    this.end = false;
  }
}

var insert = function (string) {
  var root = new TrieNode();
  var arr = string.split(" ");
  var cur;

  for (word of arr) {
    cur = root;
    for (char of word) {
      if (!(char in cur.dict)) {
        cur.dict[char] = new TrieNode();
      }
      cur = cur.dict[char];
    }
    cur.end = true;
  }

  return root;
};

var searchWord = function (root, text) {
  var cur = root;

  for (char of text) {
    if (!(char in cur.dict)) {
      return false;
    }
    cur = cur.dict[char];
  }

  return cur.end;
  // return true;
};

var searchCompleteWord = function (root, text) {
  var cur = root;
  var check;

  var dfs = function (cur, j) {
    for (var i = j; i < text.length; i++) {
      check = text[i];
      if (check === ".") {
        for (mem in cur.dict) {
          if (dfs(cur.dict[mem], i + 1)) {
            return true;
          }
          return false;
        }
      } else {
        if (!(check in cur.dict)) {
          return false;
        }
        cur = cur.dict[check];
      }

      return true;
    }
  };

  return dfs(cur, 0);
};

var string = "man is you";
var text = "m.n";
//var root = insert(string);
//var data = searchCompleteWord(root, text);
//console.log(data);
