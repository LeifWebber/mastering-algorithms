/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
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
/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
 *
 * https://leetcode.cn/problems/find-bottom-left-tree-value/description/
 *
 * algorithms
 * Medium (73.87%)
 * Likes:    646
 * Dislikes: 0
 * Total Accepted:    332.4K
 * Total Submissions: 449.9K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
 *
 * 假设二叉树中至少有一个节点。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入: root = [2,1,3]
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * ⁠
 *
 *
 * 输入: [1,2,3,4,null,5,6,null,null,7]
 * 输出: 7
 *
 *
 *
 *
 * 提示:
 *
 *
 * 二叉树的节点个数的范围是 [1,10^4]
 * -2^31
 *
 *
 */

// @lc code=start
function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return -1;
  const queue: TreeNode[] = [root];
  let ans: number | undefined;
  while (queue.length) {
    const n = queue.length;
    ans = undefined;
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      if (ans === undefined) ans = node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return ans!;
}
// @lc code=end