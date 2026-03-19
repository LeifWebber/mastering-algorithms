/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (63.08%)
 * Likes:    3040
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 2.4M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  // 传两棵树进去，第一棵的左节点 = 第二棵右节点，第一颗右节点等于第二棵左节点
  function dfs(tree1: TreeNode | null, tree2: TreeNode | null) {
    if (!tree1 || !tree2) return tree1 === tree2;
    if (tree1.val !== tree2.val) return false;
    return dfs(tree1.left, tree2.right) && dfs(tree1.right, tree2.left);
  }
  return dfs(root.left, root.right);
}
// @lc code=end
