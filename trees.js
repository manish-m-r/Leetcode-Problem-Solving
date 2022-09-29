class Node {
  constructor(val) {
    this.val = val === undefined ? null : val;
    this.left = null;
    this.right = null;
  }
}

var createTreeFromArray = function (i, array) {
  if (!array[i]) {
    return null;
  }

  var node = new Node(array[i]);
  node.left = createTreeFromArray(2 * i + 1, array);
  node.right = createTreeFromArray(2 * i + 2, array);

  return node;
};

var invertTree = function (root) {
  if (!root) {
    return null;
  }

  var node = new Node(root.val);
  node.left = invertTree(root.right);
  node.right = invertTree(root.left);

  return node;
};

//var data = invertTree(head);
//console.log(data);

console.log("-------------------------------------------------------------");

var maxDepthTree = function (root, sum = 0) {
  if (!root) {
    return sum;
  }

  var left = maxDepthTree(root.left, 1 + sum);
  var right = maxDepthTree(root.right, 1 + sum);

  return Math.max(left, right);
};

//var data = maxDepthTree(head);
console.log(data);

console.log("-------------------------------------------------------------");

var diameterOfBinary = function (root) {
  var diameter = 0;

  var dfs = function (root, sum = -1) {
    if (!root) {
      return sum;
    }

    var left = 1 + dfs(root.left);
    var right = 1 + dfs(root.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right);
  };

  dfs(root);
  return diameter;
};

//var array = [1, 2, 3, 4, 5];
//var head = createTreeFromArray(0, array);
//var data = diameterOfBinary(head);
//console.log(data);

console.log("-------------------------------------------------------------");

var balancedBinaryTree = function (root) {
  var max = 0;

  var dfs = function (root) {
    if (!root) {
      return -1;
    }

    var left = 1 + dfs(root.left);
    var right = 1 + dfs(root.right);

    max = Math.max(max, Math.abs(left - right));

    return Math.max(left, right);
  };

  dfs(root);
  if (max > 1) {
    return false;
  }

  return true;
};

//var data = balancedBinaryTree(head);
//console.log(data);

console.log("-------------------------------------------------------------");

var sameTree = function (tree1, tree2) {
  if (!tree1 && !tree2) {
    return true;
  }

  if (!tree1 || !tree2 || tree1.val != tree2.val) {
    return false;
  }

  return sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right);
};

var subTree = function (tree1, tree2) {
  if (!tree1) {
    return false;
  }

  if (sameTree(tree1, tree2)) {
    return true;
  }

  return subTree(tree1.left, tree2) || subTree(tree1.right, tree2);
};

//var array1 = [1, 2, 3];
//var array2 = [1, 2, 3];
//var tree1 = createTreeFromArray(0, array1);
//var tree2 = createTreeFromArray(0, array2);
//var data = subTree(tree1, tree2);
//console.log(data);

console.log("-------------------------------------------------------------");

var lowestCommonAnscestor = function (root, node1, node2) {
  var cur = root;
  while (cur) {
    if (node1.val < cur.val && node2.val < cur.val) {
      cur = cur.left;
    } else if (node1.val > cur.val && node2.val > cur.val) {
      cur = cur.right;
    } else {
      break;
    }
  }
  return cur.val;
};

//var node1 = new Node(2);
//var node2 = new Node(4);
//var data = lowestCommonAnscestor(head, node1, node2);
//console.log(data);

console.log("-------------------------------------------------------------");

var levelOrderTraversal = function (root) {
  var queue = [];
  queue.push(root);
  var n;
  var cur;
  var total = [];

  while (queue.length) {
    n = queue.length;
    arr = [];
    for (var i = 0; i < n; i++) {
      cur = queue.shift();
      arr.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    total.push(arr);
  }

  return total;
};

//var data = levelOrderTraversal(head);
//console.log(data);

console.log("-------------------------------------------------------------");

var leftViewOfBinaryTree = function (root) {
  var queue = [];
  queue.push(root);
  var n;
  var cur;
  var total = [];

  while (queue.length) {
    n = queue.length;
    arr = [];

    for (var i = 0; i < n; i++) {
      cur = queue.shift();
      arr.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }

    total.push(arr[arr.length - 1]);
  }

  return total;
};

//var data = leftViewOfBinaryTree(head);
//console.log(data);

console.log("-------------------------------------------------------------");

var countGoodNodes = function (root) {
  var res = 0;
  var dfs = function (root, max) {
    if (!root) {
      return;
    }

    max = Math.max(max, root.val);

    if (root.val >= max) {
      res++;
    }

    dfs(root.left, max);
    dfs(root.right, max);

    return res;
  };

  return dfs(root, root.val);
};

//var data = countGoodNodes(head);
//console.log(data);

console.log("-------------------------------------------------------------");

var validateBSTree = function (root, min, max) {
  if (!root) {
    return true;
  }

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return (
    validateBSTree(root.left, min, root.val) &&
    validateBSTree(root.right, root.val, max)
  );
};

//var data = validateBSTree(head, -1000000, 1000000);
//console.log(data);

console.log("-------------------------------------------------------------");

var KthLargestElement = function (root, k) {
  var order = [];
  var inorderTraverse = function (root) {
    if (!root) {
      return;
    }

    inorderTraverse(root.left);
    order.push(root.val);
    inorderTraverse(root.right);

    return;
  };

  inorderTraverse(root);
  return order[k - 1];
};

//var data = KthLargestElement(head, 3);
//console.log(data);

console.log("-------------------------------------------------------------");

var array = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
var head = createTreeFromArray(0, array);
