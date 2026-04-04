// function twoSum(nums: number[], target: number): number[] {
  
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i]! === target - nums[j]!) {
//           return [i, j]
//         }

//       }
//     }

//     return []
// };

function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map()
  
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i]!, i);
    }
    
    for (let i = 0; i < nums.length; i++) {
      const x = target - nums[i]!;
      if (map.has(x) && map.get(x) !== i) {
        return [i, map.get(x)!]
      }
    }

    return []
};

// const response = twoSum([2,7,11,15], 9);
// const response = twoSum([3,2,4], 6);
const response = twoSum([3,3], 6);
console.log("response ", response)
