import linear_search from "../algos/Linear_search";
import { test, expect } from "vitest";

test("Linear search, key", function() {
    
    const foo = [1, 2, 3, 10, 25, 88, 150, 667, 1010, 3333, 45968]

   expect(linear_search(foo, 1)).toEqual(true); 
   expect(linear_search(foo, 5)).toEqual(false); 
   expect(linear_search(foo, 25)).toEqual(true); 
   expect(linear_search(foo, 90)).toEqual(false); 
   expect(linear_search(foo, 667)).toEqual(true); 
   expect(linear_search(foo, 4444)).toEqual(false); 
   expect(linear_search(foo, 45968)).toEqual(true); 
   expect(linear_search(foo, 42069)).toEqual(false); 
});
