export default function binary_search_list(foo: number[], bar: number): boolean {
    //running time for binary search is logN
    //seems obvious, but for notes sake, you can only run a binary search if the list is ordered

    let low = 0;
    let high = foo.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const midpointValue = foo[midpoint];

        if (midpointValue === bar) { //if the midpoint value is bar, then you're done
            return true;
        } else if (midpointValue > bar) {
            high = midpoint; //if the midpoint value is greater, high becomes the new midpoint(high as midpoint is inclusive)
        } else {
            low = midpoint + 1; //low is exclusive, because in theory you have already used that value, so bump it up one
        }
    } while (low < high);

    return false;
}
