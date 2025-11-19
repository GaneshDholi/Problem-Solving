class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    insertInStack(val){
        let newNode = new Node(val);
        if (this.top === null){
            this.top = newNode;
            return
        }
        newNode.next = this.top;
        this.top = newNode;
    }

    deleteInStack(){
        if (this.top === null){
            console.log("Stack is Empty");
        }
        if (this.top.next === null){
            this.top = null;
            return
        }
        this.top = this.top.next;
    }

    printStack(){
        if(this.top === null){
            console.log("Stack is Empty");
        }
        let current = this.top;
        let result = "";
        while(current){
            result += current.val + "->";
            current = current.next;
        }
        console.log(result+"null");
        return this.top;
    }
}

let obj = new Stack();
obj.insertInStack(10);
obj.insertInStack(20);
obj.insertInStack(30);
obj.insertInStack(40);
obj.insertInStack(50);
obj.printStack()
obj.deleteInStack()
obj.printStack()