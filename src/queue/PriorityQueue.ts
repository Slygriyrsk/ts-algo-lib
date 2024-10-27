interface PriorityElement<T> {
    element: T;
    priority: number;
}

export class PriorityQueue<T> {
    private items: PriorityElement<T>[] = [];

    enqueue(element: T, priority: number): void {
        const queueElement: PriorityElement<T> = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; ++i) {
            // if the current has more priority then put it up
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue(): T | undefined {
        return this.items.shift()?.element;
    }

    front(): T | undefined {
        return this.items[0]?.element;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }

    toString(): string {
        // element and priority both mapped to string
        return this.items.map(item => `${item.element} (${item.priority})`).toString();
    }
}