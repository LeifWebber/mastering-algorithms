/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (48.46%)
 * Likes:    3426
 * Dislikes: 0
 * Total Accepted:    928.4K
 * Total Submissions: 1.9M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 *
 *
 *
 * 注意：
 *
 *
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 *
 *
 *
 * 提示：
 *
 *
 * ^m == s.length
 * ^n == t.length
 * 1 <= m, n <= 10^5
 * s 和 t 由英文字母组成
 *
 *
 *
 * 进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  // 如果 t 中没有，直接跳过
  // 如果有，移动快指针，清除 t 中对应已出现字符（哈希表）
  // 如果消掉了 t ， 成功；亦或者快指针到头了都未能消掉 t ，结束
  let slow = 0,
    fast = 0,
    sub = "",
    temp = "";
  const map = new Map<string, number>();
  //   现在得到了 t 的哈希表
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      map.set(t[i], 1);
    } else {
      map.set(t[i], map.get(t[i])! + 1);
    }
  }
  while (fast < s.length) {
    if (!map.has(s[slow])) slow++;
    if (!map.has(s[fast])) {
      fast++;
      slow = fast;
      temp = "";
    } else {
      // 哈希表里确实有 fast 所在字符
      temp += s[fast];
      if (map.get(s[fast]) === 1) map.delete(s[fast]);
      else map.set(s[fast], map.get(s[fast])! - 1);
      fast++;
    }
  }
  return temp;
}
// @lc code=end
