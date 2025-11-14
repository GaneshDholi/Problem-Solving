class Node {
    constructor(val) {
        this.val = val;
        this.size = 0;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    inserAtFirst(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    printLL() {
        for (let i = 0; i <= this.size; i++) {
            process.stdout.write(this.head.val + "->");
            this.head = this.head.next;
        }
        console.log("null")
    }

    //without size
    // printLList() {
    //     if (this.head === null) {
    //         console.log("Empty List");
    //         return
    //     }
    //     let temp = this.head;
    //     while (temp != null) {
    //         process.stdout.write(temp.val + "->");
    //         temp = temp.next;
    //     }
    //     console.log("null")
    //     return this.head
    // }

     printLList() {
        if (this.head === null) {
            console.log("Empty List");
            return
        }
        let current = this.head;
        let result = "";
        while (current) {
            result += current.val + "->";
            current = current.next;
        }
        console.log(result + "null");
        return this.head; 
    }

    inserAtLast(val) {
        this.size++;
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    deleteAtfirst() {
        if (this.head === null) {
            console.log("Empty list");
            return;
        }
        this.size--;
        this.head = this.head.next;
    }

    deleteAtLast() {
        if (this.head === null) {
            console.log("Empty list");
            return;
        }
        this.size--
        if (this.head.next === null) {
            this.head = null;
            return
        }
        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    inserAtIndex(val, index) {
        if (index < 0 || index > this.size) {
            console.log("Not Possible");
            return;
        }
        this.size++;
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return
        }

        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    deleteAtIndex(index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid Index");
            return;
        }
        if (this.head === null) {
            console.log("list is empty");
            return;
        }
        this.size--
        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }
}

let obj = new LinkedList();
obj.inserAtFirst(10);
obj.inserAtFirst(20);
obj.inserAtFirst(30);
const l1 = obj.printLList();
obj.inserAtFirst(40);
obj.inserAtFirst(50);
obj.printLList();
obj.inserAtLast(0);
obj.inserAtFirst(60);
const l2 = obj.printLList();
obj.printLList();
obj.deleteAtfirst();
obj.deleteAtLast();
obj.printLList();
obj.inserAtIndex(100, 4);
obj.printLList();
obj.deleteAtIndex(4);
obj.printLList();

// Linkdlist.js

var mergeTwoLIsts = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLIsts(l1.next, l2);
        return l1; 
    } else {
        l2.next = mergeTwoLIsts(l1, l2.next);
        return l2; 
    }

};

const mergedHead = mergeTwoLIsts(l1, l2);

function printMergedList(head) {
    let current = head;
    let result = "";
    while (current) {
        result += current.val + "->";
        current = current.next;
    }
    return result + "null";
}



console.log(printMergedList(mergedHead));