/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (55.31%)
 * Likes:    1418
 * Dislikes: 0
 * Total Accepted:    581K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 *
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
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const dummy: ListNode = { val: 0, next: head };
  let currentNode: ListNode | null = dummy;
  while (currentNode.next && currentNode.next.next) {
    if (currentNode.next.val === currentNode.next.next.val) {
      let nextNode: ListNode | null = currentNode.next;
      while (nextNode && nextNode.val === currentNode.next.val) {
        nextNode = nextNode.next;
      }
      currentNode.next = nextNode;
    } else {
      currentNode = currentNode.next;
    }
  }
  return dummy.next;
}
// @lc code=end
