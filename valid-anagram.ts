function isAnagram(s: string, t: string): boolean {
  const newS = s.split("").sort().join("");
  const newT = t.split("").sort().join("");
  
  if (newS === newT) return true

  return false
};

const res = isAnagram("anagram", "nagaram");

console.log("response ", res);