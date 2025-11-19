class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//based on linked list
class queue {
    constructor() {
        this.front = null;
    }

    printLL() {
        if (this.front === null) {
            console.log("Queue is Empty");
        }
        let current = this.front;
        let result = "";
        while (current) {
            result += current.val + "->";
            current = current.next;
        }
        console.log(result + "null");
        return this.front;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (this.front === null) {
            this.front = newNode;
            return
        }
        let temp = this.front;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    dequeue() {
        if (this.front === null) {
            console.log("Not Possible");
        }
        let temp = this.front;
        if (temp.next === null) {
            temp = null;
            return
        }
        this.front = temp.next;
    }
}

//based on array
class Queue {
    constructor() {
        this.q = []
    }

    print

    offer(val) {
        this.q.push(val)
    }

    poll() {
        if (this.q.length === 0) {
            console.log("Queue is Empty");
            return
        }
        return this.q.shift();
    }

    reverse(val) {
        let start = 0;
        let end = val.length - 1;

        while (start < end) {
                let temp = val[start];
                val[start] = val[end];
                val[end] = temp;
            start++;
            end--;
        }
        return val;
    }
}

let obj = new queue();
obj.enqueue(10);
obj.enqueue(20);
obj.enqueue(30);
obj.enqueue(40);
obj.enqueue(50);
obj.printLL();
obj.dequeue();
obj.printLL();

let obj2 = new Queue();
obj2.offer(10);
obj2.offer(20);
obj2.offer(30);
obj2.offer(40);
obj2.offer(50);
console.log(obj2.q)
// obj2.poll()
// console.log(obj2.q)


let a = obj2.q;
console.log(obj2.reverse(a));


