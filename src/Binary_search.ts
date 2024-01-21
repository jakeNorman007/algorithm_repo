export default function binary_search_list(foo: number[], bar: number): boolean {

    let low = 0;
    let high = foo.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = foo[midpoint];

        if (value === bar) {
            return true;
        } else if (value > bar) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    } while (low < high);

    return false;
}
