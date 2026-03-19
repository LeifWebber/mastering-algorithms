/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 *
 * https://leetcode.cn/problems/n-queens/description/
 *
 * algorithms
 * Hard (75.59%)
 * Likes:    2380
 * Dislikes: 0
 * Total Accepted:    615.5K
 * Total Submissions: 814.7K
 * Testcase Example:  '4'
 *
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 *
 *
 *
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[["Q"]]
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

// 来一个数组，序号是行号，值是列号坐标
// [1, 3, 0, 2]
/**
 * 校验对角线规则是否符合
 * @param arr 当前的数组
 * @param row 要校验的行号
 * @param col 要校验的列号
 */
/* function isValid(arr: number[], row: number, col: number) {
  for (const [index, val] of arr.entries()) {
    if (val === col) return false;
    if (Math.abs(index - row) === Math.abs(val - col)) return false;
  }
  return true;
} */
// @lc code=start
function buildBoard(arr: number[]): string[] {
  const ans: string[] = [];
  for (const col of arr) {
    const temp: string[] = new Array<string>(arr.length).fill(".");
    temp[col] = "Q";
    ans.push(temp.join(""));
  }
  return ans;
}
function solveNQueens(n: number): string[][] {
  const colSet = new Set<number>();
  const diag1 = new Set<number>();
  const diag2 = new Set<number>();
  const arr = new Array<number>();
  const ans: string[][] = [];
  function backtrack(start: number) {
    if (start === n) {
      ans.push(buildBoard(arr));
      return;
    }
    for (let i = 0; i < n; i++) {
      const d1 = start + i;
      const d2 = start - i;
      // 校验不能在同一列，还要满足对角线规则
      if (!colSet.has(i) && !diag1.has(d1) && !diag2.has(d2)) {
        arr.push(i);
        colSet.add(i);
        diag1.add(d1);
        diag2.add(d2);
        backtrack(start + 1);
        arr.pop();
        colSet.delete(i);
        diag1.delete(d1);
        diag2.delete(d2);
      }
    }
  }
  backtrack(0);
  return ans;
}
// @lc code=end