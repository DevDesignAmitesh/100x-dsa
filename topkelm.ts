function topKFrequent(nums: number[], k: number): number[] {

  const data: Record<number, number[]> = {};

  for (let n of nums) {
    if (!data[n]) {
      data[n] = []
    }
    data[n].push(n);
  }

  const arr: number[] = []
  
  for (let i = 0; i < k; i++) {
    const elm = Object.values(data).sort((a, b) => b.length - a.length)[i]?.[0]
    if (typeof elm !== "number") continue;
    arr.push(elm)
  }
    
  return arr;
}
