import { Stack } from '../../src/stack/Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('push adds an element to the stack', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  test('pop removes and returns the top element', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(1);
  });

  test('peek returns the top element without removing it', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);
  });

  test('isEmpty returns true for an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('clear removes all elements from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test('toString returns a string representation of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toString()).toBe('1,2,3');
  });
});