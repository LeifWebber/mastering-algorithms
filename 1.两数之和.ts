/*!
 * 哈希表
 *
 */

/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // const map = new Map();
  // // 把值作为键，而不是索引
  // map.set(nums[0], 0);
  // for (let i = 1; i < nums.length; i++) {
  //   if (map.has(target - nums[i])) {
  //     return [i, map.get(target - nums[i])];
  //   }
  //   map.set(nums[i], i);
  // }
  // return [];
  const readedNums: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (readedNums.includes(target - nums[i])) {
      return [nums.findIndex((value) => value === target - nums[i]), i];
    }
    readedNums.push(nums[i]);
  }
  return [];
}
console.log(twoSum([3, 2, 4], 6));

// @lc code=end
