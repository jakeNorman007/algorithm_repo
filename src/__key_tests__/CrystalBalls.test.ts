import crystal_balls from "../key/Crystal_balls";
import { test, expect } from "vitest";

test("two crystal balls problem, key", function() {
    let index = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = index; i < 10000; ++i) {
        data[i] = true;
    }

    expect(crystal_balls(data)).toEqual(index);
    expect(crystal_balls(new Array(764).fill(false))).toEqual(-1);
});
