class ListNode<T> {
    constructor(
        public value: T,
        public next: ListNode<T> | null = null,
    ) { }
}

export class LinkedList<T> {
    private head: ListNode<T> | null = null;

    append(value: T): void {
        // create a newNode where we will append the values
        const newNode = new ListNode(value);

        // If the list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        //Traverse until end
        let currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next;
        }
        // set the last node next to the new node
        currNode.next = newNode;
    }

    // at head insert the node val
    prepend(value: T): void {
        const newNode = new ListNode(value);
        newNode.next = this.head; // pointing at head

        this.head = newNode; // now new node is the head
    }

    delete(value: T): void {
        if (!this.head) return; // if empty nothing to delete

        // if head to delete
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        // if not then search for it by traversing the whole list
        let currNode = this.head;
        while (currNode.next) {
            if (currNode.next.value === value) {
                currNode.next = currNode.next.next;
                return;
            }
            currNode = currNode.next;
        }
    }

    // to chnage LL into an array
    toArray(): T[] {
        const result: T[] = [];
        let currNode = this.head;
        while (currNode) {
            result.push(currNode.value);
            currNode = currNode.next;
        }
        return result;
    }

    toString(): string {
        return this.toArray().toString();
    }
}