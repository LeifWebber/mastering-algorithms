/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (57.61%)
 * Likes:    2154
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,2,1]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 *
 *
 *
 *
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 *
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// @lc code=start
function midNode(head: ListNode) {
  let fast: ListNode | null = head,
    slow: ListNode = head;
  while (fast?.next) {
    slow = slow.next!;
    fast = fast?.next.next;
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
function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;
  const mid = midNode(head);
  let head2 = reverseList(mid);
  while (head.next) {
    if (head.val !== head2?.val) return false;
    head = head?.next;
    head2 = head2.next;
  }
  return true;
}
// @lc code=end
