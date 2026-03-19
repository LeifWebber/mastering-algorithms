/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
 *
 * https://leetcode.cn/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (64.01%)
 * Likes:    790
 * Dislikes: 0
 * Total Accepted:    391.9K
 * Total Submissions: 612.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入: root = [3,9,20,null,null,15,7]
 * 输出: 24
 * 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 *
 *
 * 示例 2:
 *
 *
 * 输入: root = [1]
 * 输出: 0
 *
 *
 *
 *
 * 提示:
 *
 *
 * 节点数在 [1, 1000] 范围内
 * -1000 <= Node.val <= 1000
 *
 *
 *
 *
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// @lc code=start
function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;
  let leftSum = 0,
    rightSum = 0;
  if (root.left) {
    if (!root.left.left && !root.left.right) leftSum = root.left.val;
    else leftSum = sumOfLeftLeaves(root.left);
  }
  if (root.right) {
    rightSum = sumOfLeftLeaves(root.right);
  }
  return leftSum + rightSum;
}
// @lc code=end
const root: TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: { val: 3, left: null, right: null },
};
sumOfLeftLeaves(root);
