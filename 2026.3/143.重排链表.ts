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
import ListNode from "../2025.11-2025.12/25.k-个一组翻转链表";

// @lc code=start
function reversList(head: ListNode): ListNode {
  let currentNode: ListNode | null = head,
    prevNode: ListNode | null = null;
  while (currentNode) {
    const nextNode: ListNode | null = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode!;
}
function reorderList(head: ListNode | null): void {
  if (head === null) return;
  let dummyNode = new ListNode(0, head);
  // 先找找中间节点
  let slow: ListNode = head,
    fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  // 此时 slow 已经是中间节点了，我们把其后的链表反转
  let half = slow.next!;
  // 关键！要断掉两部分避免 loop
  slow.next = null;
  let head2: ListNode | null = reversList(half);
  while (head2) {
    // 交替合并
    const nextHead1: ListNode | null = head!.next;
    const nextHead2: ListNode | null = head2.next;

    head!.next = head2;
    head2.next = nextHead1;

    head = nextHead1;
    head2 = nextHead2;
  }
}
// @lc code=end
