import queue from "../key/Queue";
import { test, expect } from "vitest";

test("queue, key", function() {
    const list = new queue<number>();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.deque()).toEqual(5);
    expect(list.length).toEqual(2);

    list.enqueue(11);

    expect(list.deque()).toEqual(7);
    expect(list.deque()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.length()).toEqual(0);

    list.enqueue(42);
    expect(list.peek()).toEqual(42);
    expect(list.length).toEqual(1);
});
