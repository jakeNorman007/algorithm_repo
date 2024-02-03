import binary_search_list from "../key/Binary_search";
import binary_search_list_wb from "../workbook/Binary_Search_Workbook";
import { test, expect } from "vitest";

test("Binary search, key", function() {

    const foo = [1, 2, 3, 4, 5, 6, 7, 150, 247, 5676, 98765];

    expect(binary_search_list(foo, 1)).toEqual(true);
    expect(binary_search_list(foo, 9)).toEqual(false);
    expect(binary_search_list(foo, 5)).toEqual(true);
    expect(binary_search_list(foo, 155)).toEqual(false);
    expect(binary_search_list(foo, 5676)).toEqual(true);
    expect(binary_search_list(foo, 69)).toEqual(false);
});


test("Binary search, workbook", function() {

    const foo = [1, 2, 3, 4, 5, 6, 7, 150, 247, 5676, 98765];

    expect(binary_search_list_wb(foo, 1)).toEqual(true);
    expect(binary_search_list_wb(foo, 9)).toEqual(false);
    expect(binary_search_list_wb(foo, 5)).toEqual(true);
    expect(binary_search_list_wb(foo, 155)).toEqual(false);
    expect(binary_search_list_wb(foo, 5676)).toEqual(true);
    expect(binary_search_list_wb(foo, 69)).toEqual(false);
});
