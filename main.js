/* newList has been initialized below the Node and LinkedList constructors as an example.
Some examples of the functions are also executed and logged on to the console.*/

const Node = function (value = null) {
  this.value = value;
  this.nextNode = null;
  this.changeVal = (val) => {
    this.value = val;
  };
};

const LinkedList = function () {
  this.listLength = 0;
  this.head = null;

  this.append = (val) => {
    const newNode = new Node(val);
    this.listLength++;
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let listPointer = this.head;
    while (listPointer.nextNode !== null) {
      listPointer = listPointer.nextNode;
    }
    listPointer.nextNode = newNode;
  };

  this.prepend = (val) => {
    const newNode = new Node(val);
    this.listLength++;
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.nextNode = this.head;
    this.head = newNode;
  };

  this.size = () => {
    return this.listLength;
  };

  this.headGet = () => {
    return this.head;
  };

  this.tailGet = () => {
    let listPointer = this.head;
    while (listPointer.nextNode !== null) {
      listPointer = listPointer.nextNode;
    }
    return listPointer;
  };

  this.at = (index) => {
    if (index < 0 || index > this.listLength) {
      return alert("Enter valid index number");
    }
    let listPointer = this.head;
    for (let i = 0; i < index; i++) {
      listPointer = listPointer.nextNode;
    }
    return listPointer;
  };

  this.pop = () => {
    if (this.head === null) {
      return;
    }
    let listPointer = this.head;
    while (listPointer.nextNode.nextNode !== null) {
      listPointer = listPointer.nextNode;
    }
    listPointer.nextNode = null;
    this.listLength--;
  };

  this.contains = (value) => {
    let listPointer = this.head;
    while (listPointer.value !== value) {
      if (listPointer.nextNode === null) return false;
      listPointer = listPointer.nextNode;
    }
    return true;
  };

  this.find = (value) => {
    //returns the index number of the value if it exists
    let listPointer = this.head;
    const len = this.listLength;
    for (let i = 0; i < len; i++) {
      if (listPointer.value !== value) {
        listPointer = listPointer.nextNode;
        continue;
      }
      return i;
    }
    return null;
  };

  this.toString = () => {
    let returnString = "";
    let listPointer = this.head;
    while (listPointer.nextNode !== null) {
      returnString += `( ${listPointer.value} ) -> `;
      listPointer = listPointer.nextNode;
    }
    returnString += `( ${listPointer.value} ) -> null`;
    return returnString;
  };

  this.insertAt = (value, index) => {
    if (index < 0) {
      return alert("enter a positive integer number");
    }
    const newNode = new Node(value);
    if (index > this.listLength) {
      this.listLength++;
      return this.append(newNode);
    }
    if (index === 0) {
      this.listLength++;
      return this.prepend(newNode);
    }
    let listPointer = this.head;
    for (let i = 0; i < index - 1; i++) {
      listPointer = listPointer.nextNode;
    }
    newNode.nextNode = listPointer.nextNode;
    listPointer.nextNode = newNode;
    this.listLength++;
    return;
  };

  this.removeAt = (index) => {
    let listPointer = this.at(index - 1);
    listPointer.nextNode = this.at(index + 1);
    this.listLength--;
    return;
  };
};

const newList = new LinkedList();

newList.append("Lewis");
newList.append("Fraser");
newList.append("Chrissie");
newList.prepend("Ronaldo");

console.log(
  `toString() - list converted to string list: ${newList.toString()}`
);
console.log(`List size produced by size(): ${newList.size()}`);
console.log(`head returned from headGet().value: ${newList.headGet().value}`);
console.log(`tail returned from tailGet().value: ${newList.tailGet().value}`);
console.log(
  `at(index) returns the value at the given index number (if valid). e.g. with 1: ${
    newList.at(1).value
  }`
);
console.log("pop() removes last node. i.e.:");
newList.pop();
console.log(newList.toString());
console.log(
  `contains() returns boolean if value exists - e.g. if executed with 'Lewis' : ${newList.contains(
    "Lewis"
  )}`
);
console.log(
  "find() returns the index number of a given value if it exists or returns null.: "
);
console.log(
  `find('Lewis): ${newList.find("Lewis")}, find('hgfsdf'): ${newList.find(
    "hgfsdf"
  )}`
);
console.log(
  `insert at takes an val and index number, and inserts node with that val at the index number`
);
console.log(`before: ${newList.toString()}`);
console.log(`insertAt(Albert, 2)`);
newList.insertAt("Albert", 2);
console.log(`after: ${newList.toString()}`);
console.log(
  "removeAt() removes the node at a given index number. e.g. removeAt(2):"
);
newList.removeAt(2);
console.log(`after: ${newList.toString()}`);
