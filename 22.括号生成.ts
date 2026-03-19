/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (79.09%)
 * Likes:    3972
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.5M
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// 解决这道题核心就是想清楚决策树长什么样

// @lc code=start
function generateParenthesis(n: number): string[] {
  const ans: string[] = [];
  function backtrack(open: number, close: number, path: string[]) {
    if (open === n && close === n) {
      const str = path.join("");
      ans.push(str);
      return;
    }
    if (open < n) {
      path.push("(");
      backtrack(open + 1, close, path);
      path.pop();
    }
    if (close < open) {
      path.push(")");
      backtrack(open, close + 1, path);
      path.pop();
    }
  }
  backtrack(0, 0, []);
  return ans
}
// @lc code=end
