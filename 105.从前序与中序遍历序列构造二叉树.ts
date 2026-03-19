/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (73.19%)
 * Likes:    2628
 * Dislikes: 0
 * Total Accepted:    954.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const indexMap = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) indexMap.set(inorder[i], i);

  let preIndex = 0;

  function dfs(left: number, right: number) {
    if (left > right) return null;

    const rootVal = preorder[preIndex++];
    const root = new TreeNode(rootVal);

    const mid = indexMap.get(rootVal)!;

    root.left = dfs(left, mid - 1);
    root.right = dfs(mid + 1, right);
    
    return root;
  }
  return dfs(0, inorder.length - 1);
}
// @lc code=end
buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
