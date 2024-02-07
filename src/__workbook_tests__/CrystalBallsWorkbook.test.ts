import crystal_balls_wb from "../workbook/Crystal_balls_workbook";
import { test, expect } from "vitest";

test("two crystal balls problem, workbook", function() {
    let index = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = index; i < 10000; ++i) {
        data[i] = true;
    }

    expect(crystal_balls_wb(data)).toEqual(index);
    expect(crystal_balls_wb(new Array(764).fill(false))).toEqual(-1);
});
