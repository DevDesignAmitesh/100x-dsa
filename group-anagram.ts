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

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log("response ", res);