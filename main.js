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

    this.at = (index) => {
        let listPointer = this.head;
        for (let i = 0; i < index; i++) {
            listPointer = listPointer.nextNode;
        }
        return listPointer;
    }

    this.pop = () => {
        let listPointer = this.head;
        while (listPointer.nextNode.nextNode !== null) {
            listPointer = listPointer.nextNode;
        }
        listPointer.nextNode = null;
        this.listLength--;
    }

    this.contains = (value) => {
        let listPointer = this.head;
        while (listPointer.value !== value) {
            if (listPointer.nextNode === null) return false;
            listPointer = listPointer.nextNode;
        }
        return true;
    }

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
    }

    this.toString = () => {
        let returnString = '';
        let listPointer = this.head;
        while (listPointer.nextNode !== null) {
            returnString += `( ${listPointer.value} ) -> `;
            listPointer = listPointer.nextNode;
        }
        returnString += `( ${listPointer.value} ) -> null`;
        return returnString;
    }
  };

const newList = new LinkedList();

const Node = function(value = null) {
    this.value = value;
    this.nextNode = null;
    this.changeVal = (val) => {
        this.value = val;
    }
};

newList.append('Lewis')
newList.append('Fraser')
newList.append('chrissie')
newList.prepend('ronaldo')
// newList.pop()
// console.log(newList.getHead())
// console.log(newList.getTail())
console.log(newList.size())
// console.log(newList.getTail())
// console.log(newList.at(2))

console.log(newList.contains('ronaldo'))
console.log(newList.find('Fraser'))
console.log(newList.toString())




