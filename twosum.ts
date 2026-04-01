// question: two sum (leetcode)

function twoSum(
  nums: number[],
  target: number,
  type: "bruteforce" | "hashmap",
) {
  if (type === "bruteforce") {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i]! + nums[j]! === target) {
          return [i, j];
        }
      }
    }
  }

  if (type === "hashmap") {
    // value-index
    const map: Map<number, number> = new Map()
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i]!, i);
    }

    for (let i = 0; i < nums.length; i++) {
      // revise this one and understand it properly
    }
  }
  return [];
}

console.log(twoSum([3, 2, 3], 6, "bruteforce"));
console.log(twoSum([3, 2, 3], 6, "hashmap"));
