class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return null;

        const removedNode = this.head;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;

        return removedNode.value;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) return null;

        const removedNode = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;

        return removedNode.value;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : null;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    peekAtTail() {
        // Return value of tail node
        return this.tail ? this.tail.value : null;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
};