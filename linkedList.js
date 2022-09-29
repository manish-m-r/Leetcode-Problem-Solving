class Node {
  constructor(val) {
    this.val = val === undefined ? null : val;
    this.next = null;
  }
}

var createLinkedListFromArray = function (array) {
  var head = new Node();
  var cur = head;

  for (mem of array) {
    var node = new Node(mem);
    cur.next = node;
    cur = cur.next;
  }

  return head.next;
};

var reverseList = function (head) {
  var prev = null;
  var cur = head;

  while (cur) {
    cur = cur.next;
    head.next = prev;
    prev = head;
    head = cur;
  }

  return prev;
};

//var reverse = reverseList(head);

var mergeToSortedList = function (list1, list2) {
  var first = list1;
  var second = list2;

  var sorted = new Node();
  var cur = sorted;

  while (first && second) {
    if (first.val <= second.val) {
      cur.next = first;
      first = first.next;
    } else {
      cur.next = second;
      second = second.next;
    }

    cur = cur.next;
  }

  if (!first) {
    cur.next = second;
  }

  if (!second) {
    cur.next = first;
  }

  return sorted.next;
};

//var array1 = [1, 7];
//var array2 = [6];
//var data = mergeToSortedList(
//createLinkedListFromArray(array1),
//createLinkedListFromArray(array2)
//);
//console.log(data);

console.log(
  "-----------------------------------------------------------------"
);

var reorderList = function (head) {
  var first = head;
  var second;
  var slow = head;
  var fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  second = slow.next;
  slow.next = null;

  //Reverse second list

  var reverseForOrder = function (head) {
    var prev = null;
    var cur = head;

    while (cur) {
      cur = cur.next;
      head.next = prev;
      prev = head;
      head = cur;
    }

    return prev;
  };

  second = reverseForOrder(second);

  //Merger List first and second
  while (second) {
    temp1 = first.next;
    temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }

  return head;
};

//var data = reorderList(head);
//console.log(data);

console.log(
  "-----------------------------------------------------------------"
);

var removeNthNode = function (head, n) {
  var cur = new Node();
  cur.next = head;
  var slow = cur;
  var fast = head;
  var i = 0;

  while (i < n && fast) {
    fast = fast.next;
    i++;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return cur.next;
};

var array = [1, 2, 3];
var head = createLinkedListFromArray(array);
var data = removeNthNode(head, 3);
console.log(data);

console.log(
  "-----------------------------------------------------------------"
);

var addNodes = function (list1, list2) {
  var first = list1;
  var second = list2;
  var head = new Node();
  var cur = head;
  var carry = 0;
  var sum = 0;

  while (first || second || carry != 0) {
    first === null ? (v1 = 0) : (v1 = first.val);
    second === null ? (v2 = 0) : (v2 = second.val);
    sum = v1 + v2 + carry;

    if (sum > 9) {
      carry = Number(String(sum)[0]);
      sum = Number(String(sum)[1]);
    } else {
      carry = 0;
    }

    var node = new Node(sum);
    cur.next = node;
    cur = cur.next;

    if (first) {
      first = first.next;
    }

    if (second) {
      second = second.next;
    }
  }

  return head.next;
};

var array1 = [9, 9, 9];
var array2 = [5, 2];
var list1 = createLinkedListFromArray(array1);
var list2 = createLinkedListFromArray(array2);
var data = addNodes(list1, list2);
console.log(data);
