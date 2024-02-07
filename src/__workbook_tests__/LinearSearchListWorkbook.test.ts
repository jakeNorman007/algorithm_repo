import linear_search_wb from "../workbook/Linear_search_workbook";
import { test, expect } from "vitest";

test("Linear search, workbook", function() {
    
    const foo = [1, 2, 3, 10, 25, 88, 150, 667, 1010, 3333, 45968]

   expect(linear_search_wb(foo, 1)).toEqual(true); 
   expect(linear_search_wb(foo, 5)).toEqual(false); 
   expect(linear_search_wb(foo, 25)).toEqual(true); 
   expect(linear_search_wb(foo, 90)).toEqual(false); 
   expect(linear_search_wb(foo, 667)).toEqual(true); 
   expect(linear_search_wb(foo, 4444)).toEqual(false); 
   expect(linear_search_wb(foo, 45968)).toEqual(true); 
   expect(linear_search_wb(foo, 42069)).toEqual(false); 
});
