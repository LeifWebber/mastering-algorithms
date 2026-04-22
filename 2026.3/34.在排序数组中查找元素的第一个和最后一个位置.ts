/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (45.98%)
 * Likes:    3138
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 3M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 *
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 *
 * 示例 3：
 *
 *
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums 是一个非递减数组
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * 这个函数不会校验边界情况，也就是目标值过小或者过大的情况，应该由调用方判断
 * @param nums 运行查找的数组
 * @param target 要找的目标值
 * @returns 在数组中第一个 >= 目标值的坐标，也就是最小的大于等于目标值的坐标.找不到则返回 -1
 */
const lowestIndex = (nums: readonly number[], target: number): number => {
  let left = -1,
    right = nums.length,
    mid: number;
  // 要保证 left 和 right 之间总是还有数字
  while (left + 1 < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};
// @ts-ignore
function searchRange(nums: number[], target: number): number[] {
  const min = lowestIndex(nums, target)
  if (nums[min] !== target) return [-1, -1]
  const max = lowestIndex(nums, target + 1) - 1
  return [min, max];
}
// @lc code=end
[5, 5, 7, 8, 8, 8, 8, 9, 10];
