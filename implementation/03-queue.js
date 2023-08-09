const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) return null;

        const removedNode = this.head;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;

        return removedNode.value;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
};