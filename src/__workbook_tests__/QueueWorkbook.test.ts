import Queue from "../workbook/Queue_workbook";
import { test, expect } from "vitest";

test("queue, key", function() {
    const list = new Queue<number>();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);
    expect(list.deque()).toEqual(5);
    expect(list.length).toEqual(2);

    list.enqueue(11);
    expect(list.deque()).toEqual(7);
    expect(list.deque()).toEqual(9);
    expect(list.peep()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.length).toEqual(0);

    list.enqueue(3);
    expect(list.length).toEqual(1);
    expect(list.peep()).toEqual(3);
    expect(list.deque()).toEqual(3);
    expect(list.length).toEqual(0);
});
