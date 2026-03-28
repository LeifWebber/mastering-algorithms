/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=2529 lang=typescript
 *
 * [2529] 正整数和负整数的最大计数
 *
 * https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer/description/
 *
 * algorithms
 * Easy (68.72%)
 * Likes:    72
 * Dislikes: 0
 * Total Accepted:    70.6K
 * Total Submissions: 102.8K
 * Testcase Example:  '[-2,-1,-1,1,2,3]'
 *
 * 给你一个按 非递减顺序 排列的数组 nums ，返回正整数数目和负整数数目中的最大值。
 *
 *
 * 换句话讲，如果 nums 中正整数的数目是 pos ，而负整数的数目是 neg ，返回 pos 和 neg二者中的最大值。
 *
 *
 * 注意：0 既不是正整数也不是负整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-2,-1,-1,1,2,3]
 * 输出：3
 * 解释：共有 3 个正整数和 3 个负整数。计数得到的最大值是 3 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-3,-2,-1,0,0,1,2]
 * 输出：3
 * 解释：共有 2 个正整数和 3 个负整数。计数得到的最大值是 3 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [5,20,66,1314]
 * 输出：4
 * 解释：共有 4 个正整数和 0 个负整数。计数得到的最大值是 4 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 2000
 * -2000 <= nums[i] <= 2000
 * nums 按 非递减顺序 排列。
 *
 *
 *
 *
 * 进阶：你可以设计并实现时间复杂度为 O(log(n)) 的算法解决此问题吗？
 *
 */

// @lc code=start
function maximumCount(nums: number[]): number {
  const length = nums.length;
  function lowestIndex(target: number) {
    let start = -1,
      end = length,
      mid: number;
    // 找 0 即可
    while (start + 1 < end) {
      mid = Math.floor((start + end) / 2);
      if (target <= nums[mid]) end = mid;
      else start = mid;
    }
    return end;
  }
  const left = lowestIndex(0);
  const right = lowestIndex(1) - 1;
  //   对于 0 小于下限亦或者超过上限的情况
  if ((left === 0 && nums[left] !== 0) || left === length) return length;
  else {
    if (left === right) return Math.max(length - left - 1, left);
    else return Math.max(left, length - right - 1);
  }
}
// @lc code=end
