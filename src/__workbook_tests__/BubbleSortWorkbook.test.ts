import bubble_sort_wb from "../workbook/Bubble_sort_workbook";
import { test, expect } from "vitest";

test("bubble sort, workbook", function() {
    const arr = [4, 6, 8, 2, 1, 568, 90];

    bubble_sort_wb(arr);
    expect(arr).toEqual([1, 2, 4, 6, 8, 90, 568]);
});
