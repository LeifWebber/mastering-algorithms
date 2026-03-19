/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (45.62%)
 * Likes:    3275
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.7M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 *
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 向左旋转，使数组变为 [nums[k],
 * nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始
 * 计数）。例如， [0,1,2,4,5,6,7] 下标 3 上向左旋转后可能变为 [4,5,6,7,0,1,2] 。
 *
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 *
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1], target = 0
 * 输出：-1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * nums 中的每个值都 独一无二
 * 题目数据保证 nums 在预先未知的某个下标上进行了旋转
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
function search(nums: number[], target: number): number {
  const length = nums.length;
  let left = -1,
    right = length,
    mid: number;
  // 先处理单调序列
  if (nums[length - 1] > nums[0]) {
    while (left + 1 < right) {
      mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) right = mid;
      else left = mid;
    }
    if (nums[right] !== target) return -1;
    else return right;
  } else {
    const isRight = target < nums[0] ? true : false;
    //   target 在 右边的递增序列
    if (isRight) {
      while (left + 1 < right) {
        mid = Math.floor((left + right) / 2);
        // 这就一定在右边的递增序列上
        if (nums[mid] <= nums[length - 1]) {
          if (nums[mid] >= target) right = mid;
          else left = mid;
        }
        //   这就一定在左边的递增序列上
        else left = mid;
      }
      if (nums[right] !== target) return -1;
      else return right;
    }
    //   target 在左边的递增序列，亦或者不存在
    else {
      while (left + 1 < right) {
        mid = Math.floor((left + right) / 2);
        // 这就一定在右边的递增序列上
        if (nums[mid] <= nums[length - 1]) right = mid;
        else {
          if (nums[mid] >= target) right = mid;
          else left = mid;
        }
      }
      if (nums[right] !== target) return -1;
      else return right;
    }
  }
}
// @lc code=end
console.log(search([1, 3], 2));
