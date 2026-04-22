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
// @ts-ignore
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
// @ts-ignore
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // 树为空的情况
  if (preorder.length === 0) return null;
  // 通过 inorder 序列建立以节点值为 key 的 Map
  const inorderMap = new Map<number, number>(
    inorder.map((value, index) => [value, index]),
  );
  let preIndex: number = 0;
  /**
   * 根据前序遍历不断在中序遍历序列中找到根结点，来分割左右部分，再把左右部分接到自己身上
   * 无论这个“部分”是一棵树，还是一个叶子结点
   * @param left 树在中序遍历序列里的左边界
   * @param right 树在中序遍历序列里的右边界
   * @returns 构建好的二叉树
   */
  const buildTreeUnit = (left: number, right: number): TreeNode | null => {
    // 这个条件比较重要。如果 left === right 的时候，其实就是叶子结点了。再往后，就是空区间
    if (left > right) return null;
    const rootVal = preorder[preIndex++];
    const mid = inorderMap.get(rootVal)!;
    return new TreeNode(
      rootVal,
      buildTreeUnit(left, mid - 1),
      buildTreeUnit(mid + 1, right),
    );
  };
  return buildTreeUnit(0, inorder.length - 1);
}
// @lc code=end
buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
