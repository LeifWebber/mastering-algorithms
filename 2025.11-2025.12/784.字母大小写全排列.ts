/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=784 lang=typescript
 *
 * [784] 字母大小写全排列
 *
 * https://leetcode.cn/problems/letter-case-permutation/description/
 *
 * algorithms
 * Medium (73.01%)
 * Likes:    609
 * Dislikes: 0
 * Total Accepted:    128.9K
 * Total Submissions: 176.5K
 * Testcase Example:  '"a1b2"'
 *
 * 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。
 *
 * 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "a1b2"
 * 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "3z4"
 * 输出: ["3z4","3Z4"]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length <= 12
 * s 由小写英文字母、大写英文字母和数字组成
 *
 *
 */

// @lc code=start
/**
 * 返回反转大小写以后的结果
 * @param char 字符串，仅当只传入一个大写或小写字母的时候反转其大小写，否则返回 false
 */
function revertCase(char: string): string | boolean {
  if (char.length !== 1) return false;
  if (char >= "A" && char <= "Z") return char.toLowerCase();
  if (char >= "a" && char <= "z") return char.toUpperCase();
  return false;
}
function letterCasePermutation(s: string): string[] {
  const ans: string[] = [];
  function backtrack(index: number, path: string) {
    if (index === s.length) {
      ans.push(path);
      return;
    }
    const char = revertCase(s[index]);
    if (char) {
      backtrack(index + 1, path + char);
    }
    backtrack(index + 1, path + s[index]);
  }
  backtrack(0, "");
  return ans;
}
// @lc code=end
