// 1
// returns the indices of the elms from the array which adds up to the target

function twoSum(nums: number[], target: number): number[] {
  // brute force method

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i]! === target - nums[j]!) return [i, j];
    }
  }

  // ------------------------------------

  // using hashmap

  // value-index
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i]!, i);
  }

  for (let i = 0; i < nums.length; i++) {
    // x + y = target
    // x = target - y

    const x = target - nums[i]!;

    if (map.has(x) && map.get(x) !== i) {
      return [i, map.get(x)!];
    }
  }

  return [];
}

// const res = twoSum([2,7,11,15], 9);
// const res = twoSum([3,2,4], 6);
// const res = twoSum([3, 2, 3], 6);
// console.log("response ", res);

function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const elm1 = nums[i];
    let elm2 = nums[i + 1];

    if (elm2 === undefined && nums.length > 1) elm2 = nums[0];
    console.log(elm1);
    console.log(elm2);

    if (elm1 === elm2) return true;
  }

  return false;
}

// const res = containsDuplicate([1,2,3,1]);
// const res = containsDuplicate([1,2,3,4]);
// const res = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
// const res = containsDuplicate([0]);
// const res = containsDuplicate([0,4,5,0,3,6]);
// console.log("response ", res)

function isAnagram(s: string, t: string): boolean {
  if (s.split("").sort().join("") === t.split("").sort().join("")) return true;

  return false;
}

// const res = isAnagram("anagram", "nagaram")
// const res = isAnagram("rat", "car")
// console.log("response", res)

function groupAnagrams(strs: string[]): string[][] {
    const ans: Record<string, string[]> = {}

    for (let s of strs) {
      const key = s.split("").sort().join("");
      if (!ans[key]) {
        ans[key] = []
      }
      ans[key].push(s)
    }

    return Object.values (ans);
    
};

// const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// console.log("response ", res);
