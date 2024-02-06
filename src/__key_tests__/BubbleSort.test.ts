import bubble_sort from "../key/Bubble_sort";
import { test, expect } from "vitest";

test("bubble sort, key", function() {
    const arr = [4, 6, 8, 2, 1, 568, 90];

    bubble_sort(arr);
    expect(arr).toEqual([1, 2, 4, 6, 8, 90, 568]);
});
