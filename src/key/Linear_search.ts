export default function linear_search(foo: number[], bar: number): boolean {
    //running time for linear search in O(N)
    
    for(let i = 0; i < foo.length; ++i) {
        if(foo[i] === bar) {
            return true;
        }
    }

    return false;
}
