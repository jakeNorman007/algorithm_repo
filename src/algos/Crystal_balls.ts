export default function crystal_balls(broken: boolean[]): number {
  let jumpAmount = Math.floor(Math.sqrt(broken.length));

  let i = jumpAmount;
  for(; i < broken.length; i += jumpAmount) {
    if(broken[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for(let j = 0; j < jumpAmount && i < broken.length; j++, i++) {
    if(broken[i]) {
      return i;
    }
  }

  return -1;
};
