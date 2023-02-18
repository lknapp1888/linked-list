// class MyClass {
//     // class methods
//     constructor() {...}
// }
//     method1() {...}
//     method2() {...}
//     method3() {...}
//     ...
// }

const LinkedList = function() {
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
    }

    this.prepend = (val) => {
        const newNode = new Node(val);
        this.listLength++;
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    this.size = () => {
        return this.listLength
    }

    this.getHead = () => {
        return this.head
    }

    this.getTail = () => {
        let listPointer = this.head;
        while (listPointer.nextNode !== null) {
            listPointer = listPointer.nextNode;
        }
        return listPointer;
    }

  };

const newList = new LinkedList();

const Node = function(value = null) {
    this.value = value;
    this.nextNode = null;
    this.changeVal = (val) => {
        // check, may be issue with the use of 'this' due to being in function/arrow function
        this.value = val;
    }
};

newList.append('Lewis')
newList.append('Fraser')
newList.append('chrissie')
newList.prepend('ronaldo')
console.log(newList.getHead())
console.log(newList.size())
console.log(newList.getTail())

