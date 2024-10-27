export class Stack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
    }

    //pop is not void
    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean | undefined {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }

    toString(): string {
        return this.items.toString();
    }
}