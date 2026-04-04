function productExceptSelf(nums: number[]): number[] {
  const answer: number[] = []
  
  for (let i = 0; i < nums.length; i++) {
    let pro = 1;
    
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      pro *= nums[j]!
    }

    answer[i] = pro;
  }

  return answer;
  
}


// const res = productExceptSelf([1, 2, 3, 4]);
// const res = productExceptSelf([-1,1,0,-3,3]);
// console.log("response ", res);
