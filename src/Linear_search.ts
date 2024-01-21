export default function linear_search(foo: number[], bar: number): boolean {
    for(let i = 0; i < foo.length; ++i) {
        if(foo[i] === bar) {
            return true;
        }
    }

    return false;
}
