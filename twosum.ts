// question: two sum (leetcode)

// solution: 1 
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j]! +  nums[i]! === target) {
//         return [i, j]
//       }

//     }
//   }
//   return []
// }


// solution: 2
// function twoSum(nums: number[], target: number): number[] {
//   const map: Map<number, number> = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i]!, i);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]!;

//     console.log(complement);

//     if (map.has(complement) && map.get(complement) !== i) {
//       return [i, map.get(complement)!];
//     }
//   }
//   // If no valid pair is found, return an empty array
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 3], 6));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
