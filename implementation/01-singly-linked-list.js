class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;

        // Time complexity hypothesis: O(n) - Linear time complexity, where n is the number of nodes in the list
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return null;

        const removedNode = this.head;
        this.head = this.head.next;
        this.length--;

        return removedNode.value;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return null;

        if (!this.head.next) {
            const removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode.value;
        }

        let prev = null;
        let curr = this.head;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.length--;

        return curr.value;

        // Time complexity hypothesis: O(n) - Linear time complexity, where n is the number of nodes in the list
    }

    peekAtHead() {
        // Return the value of head node
        return this.head ? this.head.value : null;

        // Time complexity hypothesis: O(1) - Constant time complexity
    }

    print() {
        // Print out the linked list
        let curr = this.head;
        const values = [];
        while (curr) {
            values.push(curr.value);
            curr = curr.next;
        }
        console.log(values.join(" -> "));

        // Time complexity hypothesis: O(n) - Linear time complexity, where n is the number of nodes in the list
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
};