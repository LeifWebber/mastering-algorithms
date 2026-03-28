/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 *
 * https://leetcode.cn/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (75.40%)
 * Likes:    2126
 * Dislikes: 0
 * Total Accepted:    686.1K
 * Total Submissions: 909.9K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a"
 * 输出：[["a"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 16
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
function partition(s: string): string[][] {
  const ans: string[][] = [];
  const track: string[] = [];
  const isPalindrome = (str: string, left: number, right: number) => {
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  };
  const backtrack = (startIndex: number) => {
    if (startIndex >= s.length) {
      ans.push([...track]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      if (isPalindrome(s, startIndex, i)) {
        const str = s.slice(startIndex, i + 1);
        track.push(str);
        backtrack(i + 1);
        track.pop();
      }
    }
  };
  backtrack(0);
  return ans;
}
// @lc code=end
/* 
想象一下处理 aab 的过程：
第一刀：
    * 切在 'a' 后面：得到 "a"（是回文）。剩下 "ab" 待处理。
        第二刀（处理 "ab"）：
            切在 'a' 后面：得到 "a"（是回文）。剩下 "b" 待处理。
                第三刀（处理 "b"）：
                    切在 'b' 后面：得到 "b"（是回文）。无剩余。-> 收集结果 ["a", "a", "b"]
            切在 "ab" 后面：得到 "ab"（不是回文）。-> 这条路走不通，剪枝（Prune）/ 回溯。
    * 切在 "aa" 后面：得到 "aa"（是回文）。剩下 "b" 待处理。
        第二刀（处理 "b"）：
            切在 'b' 后面：得到 "b"（是回文）。无剩余。-> 收集结果 ["aa", "b"]
    * 切在 "aab" 后面：得到 "aab"（不是回文）。-> 剪枝。 
*/
