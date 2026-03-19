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
  const dummy: ListNode = { val: 0, next: head };
  let p0 = dummy;
  let n = 0; // 先统计一下有几组，后面的循环条件需要用
  while (p0.next !== null) {
    p0 = p0.next;
    n++;
  }
  p0 = dummy;
  let prevNode: ListNode | null = null;
  let currentNode: ListNode | null = p0.next;
  //   k 个 1 组，进行几组？
  for (let i = 0; i < Math.floor(n / k); i++) {
    for (let j = 0; j < k; j++) {
      const nextNode = currentNode!.next;
      currentNode!.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    const nextNode = p0.next;
    p0.next!.next = currentNode;
    p0.next = prevNode;
    p0 = nextNode!;
  }
  return dummy.next;
}
// @lc code=end
