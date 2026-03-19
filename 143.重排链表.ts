/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
 *
 * https://leetcode.cn/problems/reorder-list/description/
 *
 * algorithms
 * Medium (67.74%)
 * Likes:    1642
 * Dislikes: 0
 * Total Accepted:    405.8K
 * Total Submissions: 599K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
 *
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 *
 * 请将其重新排列后变为：
 *
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 * 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：head = [1,2,3,4]
 * 输出：[1,4,2,3]
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[1,5,2,4,3]
 *
 *
 *
 * 提示：
 *
 *
 * 链表的长度范围为 [1, 5 * 10^4]
 * 1 <= node.val <= 1000
 *
 *
 */
import ListNode from "./25.k-个一组翻转链表";

// @lc code=start
function midNode(head: ListNode) {
  let fast: ListNode | null = head,
    slow = head;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  return slow;
}
function reverseList(head: ListNode) {
  let preNode: ListNode | null = null,
    currentNode: ListNode | null = head;
  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = preNode;
    preNode = currentNode;
    currentNode = nextNode;
  }
  return preNode;
}
function reorderList(head: ListNode | null): void {
  if (head !== null) {
    const mid = midNode(head);
    let head2 = reverseList(mid);
    while (head2?.next) {
      const nextHead = head!.next;
      const nextHead2 = head2.next;
      head!.next = head2;
      head2.next = nextHead;
      head = nextHead;
      head2 = nextHead2;
    }
  }
}
// @lc code=end