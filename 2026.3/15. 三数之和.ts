// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

function threeSum(nums: number[], target = 0): number[][] {
  const ans: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const sum = target - nums[i];
    // 从这里开始和 167 一样
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const temp = nums[left] + nums[right];
      if (temp === sum) {
        ans.push([nums[i], nums[left], nums[right]]);
        break;
      }
      if (temp < sum) left++;
      else right--;
    }
  }
  return [...new Set(ans)];
}
