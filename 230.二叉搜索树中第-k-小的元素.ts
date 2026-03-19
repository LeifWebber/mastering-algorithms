/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第 K 小的元素
 *
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/
 *
 * algorithms
 * Medium (79.81%)
 * Likes:    1044
 * Dislikes: 0
 * Total Accepted:    637K
 * Total Submissions: 798.1K
 * Testcase Example:  '[3,1,4,null,2]\n1'
 *
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,1,4,null,2], k = 1
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [5,3,6,2,4,null,null,1], k = 3
 * 输出：3
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中的节点数为 n 。
 * 1 <= k <= n <= 10^4
 * 0 <= Node.val <= 10^4
 *
 *
 *
 *
 * 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
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
// 一种利用迭代器的方法
// 时空复杂度都一样，但是常数开销更大
function* inOrder(node: TreeNode | null): Generator {
  if (!node) return;
  yield* inOrder(node.left);
  yield node.val;
  yield* inOrder(node.right);
}

function kthSmallest(root: TreeNode | null, k: number) {
  for (const element of inOrder(root)) {
    if (--k === 0) return element;
  }
}
// @lc code=end
function kthSmallest1(root: TreeNode | null, k: number): number {
  let ans: number = 0;
  function inOrder(node: TreeNode | null) {
    if (!node) return false;
    if (inOrder(node.left)) return true;
    if (--k <= 0) {
      ans = node.val;
      return true;
    }
    if (inOrder(node.right)) return true;
    return false;
  }
  inOrder(root);
  return ans;
}
