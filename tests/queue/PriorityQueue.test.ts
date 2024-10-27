import { PriorityQueue } from '../../src/queue/PriorityQueue';

describe('PriorityQueue', () => {
  let pq: PriorityQueue<string>;

  beforeEach(() => {
    pq = new PriorityQueue<string>();
  });

  test('enqueue adds elements with priority', () => {
    pq.enqueue('Low priority', 3);
    pq.enqueue('High priority', 1);
    pq.enqueue('Medium priority', 2);
    expect(pq.size()).toBe(3);
    expect(pq.front()).toBe('High priority');
  });

  test('dequeue removes and returns the highest priority element', () => {
    pq.enqueue('Low priority', 3);
    pq.enqueue('High priority', 1);
    pq.enqueue('Medium priority', 2);
    expect(pq.dequeue()).toBe('High priority');
    expect(pq.dequeue()).toBe('Medium priority');
    expect(pq.size()).toBe(1);
  });

  test('front returns the highest priority element without removing it', () => {
    pq.enqueue('Low priority', 3);
    pq.enqueue('High priority', 1);
    expect(pq.front()).toBe('High priority');
    expect(pq.size()).toBe(2);
  });

  test('isEmpty returns true for an empty priority queue', () => {
    expect(pq.isEmpty()).toBe(true);
    pq.enqueue('Test', 1);
    expect(pq.isEmpty()).toBe(false);
  });

  test('clear removes all elements from the priority queue', () => {
    pq.enqueue('Test1', 1);
    pq.enqueue('Test2', 2);
    pq.clear();
    expect(pq.isEmpty()).toBe(true);
    expect(pq.size()).toBe(0);
  });

  test('toString returns a string representation of the priority queue', () => {
    pq.enqueue('Low', 3);
    pq.enqueue('High', 1);
    pq.enqueue('Medium', 2);
    expect(pq.toString()).toBe('High (1),Medium (2),Low (3)');
  });
});