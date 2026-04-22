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
function constructFromPrePost(
  preorder: number[],
  postorder: number[],
): TreeNode | null {
  const postorderMap = new Map<number, number>(
    postorder.map((value, index) => [value, index]),
  );
  let preIndex: number = 0;
  const buildTreeUnit = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;

    const rootVal = preorder[preIndex++];
    if (left === right) return new TreeNode(rootVal);

    const leftVal = preorder[preIndex];
    const leftIndex = postorderMap.get(leftVal)!;
    return new TreeNode(
      rootVal,
      buildTreeUnit(left, leftIndex),
      buildTreeUnit(leftIndex + 1, right - 1),
    );
  };
  return buildTreeUnit(0, preorder.length - 1);
}
// @lc code=end
// 下面是构建出所有可能的解的算法，暂时没看懂。。
// function constructAllFromPrePost(
//   preorder: number[],
//   postorder: number[],
// ): Array<TreeNode | null> {
//   const n = preorder.length;
//   if (n !== postorder.length) return [];
//   if (n === 0) return [null];

//   const postIndexMap = new Map<number, number>();
//   for (let i = 0; i < n; i++) {
//     postIndexMap.set(postorder[i], i);
//   }

//   const cloneTree = (root: TreeNode | null): TreeNode | null => {
//     if (!root) return null;
//     return new TreeNode(root.val, cloneTree(root.left), cloneTree(root.right));
//   };

//   const build = (
//     preL: number,
//     preR: number,
//     postL: number,
//     postR: number,
//   ): TreeNode[] => {
//     if (preL > preR) return [];
//     if (preL === preR) return [new TreeNode(preorder[preL])];

//     const rootVal = preorder[preL];
//     const childRootVal = preorder[preL + 1];
//     const idx = postIndexMap.get(childRootVal);

//     if (idx === undefined || idx < postL || idx >= postR) {
//       return [];
//     }

//     const subtreeSize = idx - postL + 1;
//     const totalSize = preR - preL + 1;

//     const results: TreeNode[] = [];

//     // 根节点只有一个孩子子树
//     if (subtreeSize === totalSize - 1) {
//       const childTrees = build(preL + 1, preR, postL, postR - 1);

//       for (const child of childTrees) {
//         results.push(new TreeNode(rootVal, cloneTree(child), null));
//         results.push(new TreeNode(rootVal, null, cloneTree(child)));
//       }

//       return results;
//     }

//     // 根节点左右子树都存在，切分唯一
//     const leftPreL = preL + 1;
//     const leftPreR = preL + subtreeSize;
//     const leftPostL = postL;
//     const leftPostR = idx;

//     const rightPreL = leftPreR + 1;
//     const rightPreR = preR;
//     const rightPostL = idx + 1;
//     const rightPostR = postR - 1;

//     const leftTrees = build(leftPreL, leftPreR, leftPostL, leftPostR);
//     const rightTrees = build(rightPreL, rightPreR, rightPostL, rightPostR);

//     for (const left of leftTrees) {
//       for (const right of rightTrees) {
//         results.push(
//           new TreeNode(rootVal, cloneTree(left), cloneTree(right)),
//         );
//       }
//     }

//     return results;
//   };

//   return build(0, n - 1, 0, n - 1);
// }