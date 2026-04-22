/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (69.88%)
 * Likes:    2691
 * Dislikes: 0
 * Total Accepted:    939.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 *
 *
 *
 * 提示：
 *
 *
 * 链表中的节点数目为 n
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 *
 *
 *
 *
 * 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
 *
 *
 *
 *
 */
export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// @lc code=start
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let dummyNode: ListNode | null = new ListNode(0, head);
  // 先来算算循环要来几次
  let detect: ListNode | null = dummyNode,
    length = 0;
  while (detect!.next) {
    detect = detect.next;
    length++;
  }
  const loopTimes = Math.floor(length / k);
  let currentNode: ListNode | null = dummyNode.next,
    prevNode: ListNode | null = null,
    nodeBeforeK = dummyNode;
  // 进行几个 k 组
  for (let i = 1; i <= loopTimes; i++) {
    // 每个 K 组内部的反转
    for (let j = 1; j <= k; j++) {
      const nextNode = currentNode!.next;
      currentNode!.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    // 这时候，currentNode 已经在 K 的后面一个节点了
    const nxtNode = nodeBeforeK.next;
    nodeBeforeK.next!.next = currentNode;
    nodeBeforeK.next = prevNode;
    nodeBeforeK = nxtNode!;
  }
  return dummyNode.next;
}
// @lc code=end
