/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 *
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (57.92%)
 * Likes:    2025
 * Dislikes: 0
 * Total Accepted:    693.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left  。请你反转从位置 left 到位置 right 的链表节点，返回
 * 反转后的链表 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目为 n
 * 1
 * -500
 * 1
 *
 *
 *
 *
 * 进阶： 你可以使用一趟扫描完成反转吗？
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
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummy: ListNode = { val: 0, next: head };
  let nodeBeforeLeft = dummy;
  // 让指针移动到 left 前一个节点，如果 left 没有前一个节点，那指针会在 dummy
  for (let i = 0; i < left - 1; i++) nodeBeforeLeft = nodeBeforeLeft.next!;
  let currentNode = nodeBeforeLeft.next;
  // 先让 left 节点指向空
  let prevNode: ListNode | null = null;
  for (let i = left; i <= right; i++) {
    const nextNode: ListNode | null = currentNode!.next;
    currentNode!.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  // 到这里，currentNode 是 right 的后一个节点，prevNode 是 right 节点
  nodeBeforeLeft.next!.next = currentNode;
  nodeBeforeLeft.next = prevNode;
  // 由于 nodeBeforeLeft.next 被修正，这里的 dummy.next 自然指向新的头节点
  return dummy.next;
}
// @lc code=end

