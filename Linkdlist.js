class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Linkdlist {
    constructor() {
        this.head = null;
    }

    printLinkedList() {
        if (this.head === null) {
            console.log("Empty list");
            return
        }
        let current = this.head;
        let result = "";
        while (current) {
            result += current.val + "->";
            current = current.next;
        }
        console.log(result + "null");
        return this.head
    }

    //inseratfirst
    inserAtFirst(val) {
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode;
            return
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    //insertatlast
    inserAtLast(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    //deleteatfirst
    deleteAtFirst() {
        if (this.head === null) {
            console.log("Empty list");
            return
        }
        if (this.head.next === null) {
            this.head = null;
            return
        }
        this.head = this.head.next;
    }
    //deleteatlast
    deleteAtLast() {
        if (this.head === null) {
            console.log("Empty list");
            return
        }
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

    //insertAtindex
    inserAtIndex(index, val){
        if(index < 0 || index > this.length){
            console.log("not Possible");
            return
        }
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            return
        }
        let temp = this.head;
        for (let i = 0; i < index-1; i++){
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }
    //deleteAtindex
    deleteAtIndex(index){
        if(index < 0 || index > this.length){
            console.log("not Possible");
            return
        }
        let temp = this.head
        for(let i = 0; i < index-1; i++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }
}

let obj = new Linkdlist();
obj.inserAtFirst(10);
obj.inserAtFirst(20);
obj.inserAtFirst(30);
obj.inserAtFirst(40);
obj.inserAtFirst(50);
obj.printLinkedList();
obj.inserAtLast(100);
obj.inserAtFirst(100);
obj.printLinkedList();
obj.deleteAtFirst();
obj.printLinkedList();
obj.deleteAtLast();
obj.printLinkedList();
obj.inserAtIndex(3, 200);
obj.printLinkedList();
obj.deleteAtIndex(4);
obj.printLinkedList();