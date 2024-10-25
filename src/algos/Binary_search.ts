export default function binary_search_list(foo: number[], bar: number): boolean {
  let low = 0;
  let high = foo.length;

  while(low < high) {
    const midpoint = Math.floor(low + (high - low) / 2);
    const midpoint_value = foo[midpoint];

    if (midpoint_value === bar) {
      return true;
    } else if (midpoint_value > bar) {
      high = midpoint;
    } else {
      low = midpoint + 1;
    }
  }

  return false;
}
