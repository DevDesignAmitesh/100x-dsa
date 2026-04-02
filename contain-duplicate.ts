function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
}

const res = containsDuplicate([0, 4, 5, 0, 3, 6]);
console.log("response ", res);
