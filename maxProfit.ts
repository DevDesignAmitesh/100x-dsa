function maxProfit(prices: number[]): number {
  const all: Map<number, number> = new Map();
  let smallest = prices[0]!;
  let highest = prices[0]!;

  for (let i = 0; i < prices.length; i++) {
    all.set(prices[i], i);
  }

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= smallest) {
      if (prices[i + 1] !== undefined) {
        smallest = prices[i];
      }
    }
  }

  for (let i = 0; i < prices.length; i++) {
    const indexOfSmallest = all.get(smallest)!;

    if (indexOfSmallest > i) {
      highest = 0;
      continue;
    }

    if (prices[i] >= highest) {
      highest = prices[i];
    }
  }

  console.log(highest);
  console.log(smallest);

  return highest - smallest;
}

// const res = maxProfit([7, 1, 5, 3, 6, 4]);
// const res = maxProfit([7, 6, 4, 3, 1]);
// const res = maxProfit([2, 4, 1]);
const res = maxProfit([3, 2, 6, 5, 0, 3]);
console.log("response ", res);
