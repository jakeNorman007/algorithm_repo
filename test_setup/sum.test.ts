import { expect, test } from 'vitest';
import sum from './test_setup/sum';

test('adds 1 + 2 and should give you 3', () => {
    expect(sum(1, 2)).toBe(3)
});
