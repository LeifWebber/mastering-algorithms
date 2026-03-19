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
function searchRange(nums: number[], target: number): number[] {
  // 写一个函数，这会找到最小的满足 nums[i] >= target 的坐标
  // 对于 target 大于数组中所有元素的情况，right 会停在 length 下标
  // 对于 target 小于数组中所有元素的情况，right 会停在 下标 0
  function lowestIndex(nums: number[], target: number) {
    let left = -1,
      right = nums.length,
      mid: number;
    // 直到没有什么数可以继续向其收拢的时候
    while (left + 1 < right) {
      mid = Math.floor((left + right) / 2);
      //   使用小于等于而不是小于，是找到**最小**的满足 nums[i] >= target 的原因。
      //   这迫使右边界向着中间收，最后停在 target 上，所以自然找到的是最小的那个。
      //   如果是小于号，那就是左边界向中间收，最后自然是找到最大的那个。
      if (target <= nums[mid]) right = mid;
      else left = mid;
    }
    return right;
  }
  const left = lowestIndex(nums, target);
  if (left === nums.length || nums[left] !== target) return [-1, -1];
  const right = lowestIndex(nums, target + 1) - 1;
  return [left, right];
}
// @lc code=end
[5, 5, 7, 8, 8, 8, 8, 9, 10];
