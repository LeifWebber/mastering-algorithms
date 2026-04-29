/*
 * @lc app=leetcode.cn id=3 lang=rust
 * @lcpr version=
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (42.36%)
 * Likes:    11442
 * Dislikes: 0
 * Total Accepted:    4.2M
 * Total Submissions: 9.8M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。
 *
 *
 * 示例 2:
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

// @lcpr-template-start
struct Solution;
// @lcpr-template-end
// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let iter = s.as_bytes();
        let mut slow: usize = 0;
        let mut fast: usize = 0;
        let mut max: i32 = 0;
        let mut char_map = HashMap::<u8, usize>::new();
        for index in 0..iter.len() {
            // map 里有该字符
            if let Some(&last_index) = char_map.get(&iter[fast]) {
                slow = slow.max(last_index + 1);
            }
            max = max.max((fast - slow + 1) as i32);
            char_map.insert(iter[index], index);
            fast += 1;
        }
        max
    }
}
// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */
fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn examples() {
        assert_eq!(Solution::length_of_longest_substring("abcabcbb".to_string()), 3);
        assert_eq!(Solution::length_of_longest_substring("bbbbb".to_string()), 1);
        assert_eq!(Solution::length_of_longest_substring("pwwkew".to_string()), 3);
    }

    #[test]
    fn repeated_char_before_window() {
        assert_eq!(Solution::length_of_longest_substring("tmmzuxt".to_string()), 5);
    }
}
