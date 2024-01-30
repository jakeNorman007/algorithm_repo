export default function crystal_balls(broken: boolean[]): number {
    //runtime here is the square root of N
    const jumpAmount = Math.floor(Math.sqrt(broken.length)); //use floor because in an instance sqrt 3 is 1. so we round

    //use the first ball to see whare it will break
    let i = jumpAmount;
    for (; i < broken.length; i += jumpAmount) {
        if(broken[i]) {
            break;
        }
    }

    i -= jumpAmount;
 
    for (let j = 0; j < jumpAmount && i < broken.length; ++i, ++j) {
        if (broken[i]) {
            return i;
        }
    }

    return -1;
}
