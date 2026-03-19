/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 *
 * https://leetcode.cn/problems/combinations/description/
 *
 * algorithms
 * Medium (77.75%)
 * Likes:    1813
 * Dislikes: 0
 * Total Accepted:    962.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 *
 * 你可以按 任何顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4, k = 2
 * 输出：
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 * 示例 2：
 *
 *
 * 输入：n = 1, k = 1
 * 输出：[[1]]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];
  function backtrack(num: number) {
    if (path.length === k) {
      ans.push([...path]);
      return;
    }
    // 有些时候继续往下走不可能凑出 k 个数，循环里这个条件就是剪枝优化
    for (let i = num; i <= n && i + k - path.length - 1 <= n; i++) {
      path.push(i);
      backtrack(i + 1);
      path.pop();
    }
  }
  backtrack(1);
  return ans;
}
// @lc code=end
