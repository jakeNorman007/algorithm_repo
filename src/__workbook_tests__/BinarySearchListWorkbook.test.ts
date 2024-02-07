import binary_search_list_wb from "../workbook/Binary_search_workbook";
import { test, expect } from "vitest";

test("Binary search, workbook", function() {

    const foo = [1, 6, 9, 14, 35, 66, 97, 150, 247, 5676, 98765];

    expect(binary_search_list_wb(foo, 1)).toEqual(true);
    expect(binary_search_list_wb(foo, 8)).toEqual(false);
    expect(binary_search_list_wb(foo, 9)).toEqual(true);
    expect(binary_search_list_wb(foo, 155)).toEqual(false);
    expect(binary_search_list_wb(foo, 5676)).toEqual(true);
    expect(binary_search_list_wb(foo, 69)).toEqual(false);
});

