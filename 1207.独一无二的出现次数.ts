/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=1207 lang=typescript
 *
 * [1207] 独一无二的出现次数
 *
 * https://leetcode.cn/problems/unique-number-of-occurrences/description/
 *
 * algorithms
 * Easy (74.45%)
 * Likes:    246
 * Dislikes: 0
 * Total Accepted:    124K
 * Total Submissions: 166.6K
 * Testcase Example:  '[1,2,2,1,1,3]'
 *
 * 给你一个整数数组 arr，如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：arr = [1,2,2,1,1,3]
 * 输出：true
 * 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
 *
 * 示例 2：
 *
 *
 * 输入：arr = [1,2]
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
 *
 *
 */

// @lc code=start
function uniqueOccurrences(arr: number[]): boolean {
  const set = new Set(arr);
  const map = new Map();
  if (set.size === arr.length) return false;

  for (const element of arr) {
    if (!map.has(element)) map.set(element, 1);
    else {
      const count = map.get(element);
      map.set(element, count + 1);
    }
  }
  return map.size === new Set(map.values()).size;
}
// @lc code=end
