export interface Collection<T> {
    add(element: T): void;
    remove(element: T): boolean;
    contains(element: T): boolean;
    size(): number;
    isEmpty(): boolean;
    clear(): void;
    toArray(): T[];
}