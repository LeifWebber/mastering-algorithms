/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N 皇后 II
 *
 * https://leetcode.cn/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (83.13%)
 * Likes:    590
 * Dislikes: 0
 * Total Accepted:    208.1K
 * Total Submissions: 250.4K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 * 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4
 * 输出：2
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 9
 *
 *
 *
 *
 */

// @lc code=start
function totalNQueens(n: number): number {
  let ans: number = 0;
  const diag1 = new Set();
  const diag2 = new Set();
  const colSet = new Set();
  function backtrack(row: number) {
    if (row === n) {
      ans++;
      return;
    }
    for (let col = 0; col < n; col++) {
      const d1 = row + col;
      const d2 = row - col;
      if (!colSet.has(col) && !diag1.has(d1) && !diag2.has(d2)) {
        colSet.add(col);
        diag1.add(d1);
        diag2.add(d2);
        backtrack(row + 1);
        colSet.delete(col);
        diag1.delete(d1);
        diag2.delete(d2);
      }
    }
  }
  backtrack(0);
  return ans;
}
// @lc code=end
