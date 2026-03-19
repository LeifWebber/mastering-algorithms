/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (65.79%)
 * Likes:    5966
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 2.3M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */
// 解决此题的关键在于抓住本质：
// 对于每一点来说，决定该点存多少水的到底是什么？
// @lc code=start
function trap(height: number[]): number {
  let left = 0,
    leftMax = 0,
    right = height.length - 1,
    rightMax = 0,
    sum = 0;
  while (left <= right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);
    if (leftMax <= rightMax) {
      sum += leftMax - height[left];
      left++;
    } else {
      sum += rightMax - height[right];
      right--;
    }
  }
  return sum;
}
// @lc code=end
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
