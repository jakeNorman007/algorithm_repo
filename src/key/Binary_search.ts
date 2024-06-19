export default function binary_search_list(foo: number[], bar: number): boolean {
    //running time for binary search is logN
    //you can only run a binary search if the list is ordered

    let low = 0;
    let high = foo.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const midpointValue = foo[midpoint];

        if (midpointValue === bar) {
            return true;
        } else if (midpointValue > bar) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    } while (low < high);

    return false;
}
