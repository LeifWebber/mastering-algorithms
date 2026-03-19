/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=889 lang=typescript
 *
 * [889] 根据前序和后序遍历构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (70.72%)
 * Likes:    422
 * Dislikes: 0
 * Total Accepted:    74.6K
 * Total Submissions: 105.5K
 * Testcase Example:  '[1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]'
 *
 * 给定两个整数数组，preorder 和 postorder ，其中 preorder 是一个具有 无重复 值的二叉树的前序遍历，postorder
 * 是同一棵树的后序遍历，重构并返回二叉树。
 *
 * 如果存在多个答案，您可以返回其中 任何 一个。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
 * 输出：[1,2,3,4,5,6,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入: preorder = [1], postorder = [1]
 * 输出: [1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= preorder.length <= 30
 * 1 <= preorder[i] <= preorder.length
 * preorder 中所有值都 不同
 * postorder.length == preorder.length
 * 1 <= postorder[i] <= postorder.length
 * postorder 中所有值都 不同
 * 保证 preorder 和 postorder 是同一棵二叉树的前序遍历和后序遍历
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
function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  const map = new Map();
  const length = postorder.length;
  let preIndex = 0;
  for (let i = 0; i < length; i++) map.set(postorder[i], i);
  function dfs(left: number, right: number) {
    if (left > right) return null;
    const rootVal = preorder[preIndex++];
    const root = new TreeNode(rootVal);
    const postIndex = map.get(preorder[preIndex]);
    root.left = dfs(left, postIndex);
    root.right = dfs(postIndex + 1, right - 1);
    return root;
  }
  return dfs(0, length - 1);
}
// @lc code=end
