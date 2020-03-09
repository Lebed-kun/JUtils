import StackNode from "./StackNode";

/**
 * @param {number} maxSize Maximum number of elements in stack
 * @param {Array<any>?} initValues Initial values for stack
 */
const Stack = (maxSize, initValues = null) => {
  let head = null;
  let tail = null;
  let count = 0;

  // Interface begin
  const push = el => {
    if (!head) {
      head = StackNode(el);
      tail = head;
    } else {
      tail.next = StackNode(el, null, tail);
      tail = tail.next;
    }

    if (count + 1 > maxSize) {
      const removed = head;
      head = head.next;
      removed.next = null;
      head.prev = null;
    } else {
      count++;
    }
  };

  const pop = () => {
    if (!head) {
      throw Error("Cannot remove element from empty stack");
    }

    const removed = tail;

    if (head === tail) {
      head = tail = null;
    } else {
      tail = tail.prev;
      tail.next = null;
    }

    removed.prev = null;
    count--;

    return removed.value;
  };

  const peek = () => (tail ? tail.value : undefined);
  const length = () => count;
  // Interface end

  if (initValues) {
    initValues.forEach((el, id) => id < maxSize && push(el));
  }

  return {
    push,
    pop,
    peek,
    length
  };
};

export default Stack;
