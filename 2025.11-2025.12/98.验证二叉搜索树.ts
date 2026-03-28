/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode.cn/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (40.15%)
 * Likes:    2674
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 3.2M
 * Testcase Example:  '[2,1,3]'
 *
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 *
 * 有效 二叉搜索树定义如下：
 *
 *
 * 节点的左子树只包含 严格小于 当前节点的数。
 * 节点的右子树只包含 严格大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [2,1,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [5,1,4,null,null,3,6]
 * 输出：false
 * 解释：根节点的值是 5 ，但是右子节点的值是 4 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目范围在[1, 10^4] 内
 * -2^31 <= Node.val <= 2^31 - 1
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
// 中序遍历的做法，利用递增序列的性质
function isValidBST(root: TreeNode | null): boolean {
  let prev = -Infinity;
  function inOrder(node: TreeNode | null) {
    if (!node) return true;
    if (!inOrder(node.left)) return false;
    if (node.val <= prev) return false;
    prev = node.val;
    if (!inOrder(node.right)) return false;
    return true;
  }
  return inOrder(root);
}
// @lc code=end
// 前序遍历做法，把范围往下传，比较经典
/* function isValidBST(root: TreeNode | null): boolean {
  function isValid(node: TreeNode | null, min: number, max: number) {
    if (!node) return true;
    if (node.val >= max || node.val <= min) return false;
    if (
      !isValid(node.left, min, node.val) ||
      !isValid(node.right, node.val, max)
    )
      return false;
    return true;
  }
  return isValid(root, -Infinity, Infinity);
} */
