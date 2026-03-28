/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode.cn/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (74.85%)
 * Likes:    2506
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 <= Node.val <= 100
 *
 *
 */
import  ListNode  from "./25.k-个一组翻转链表";
// @lc code=start
function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;
  // 先统计一下有几个节点，下面的循环条件需要
  let n = 0;
  for (
    let currentNode: ListNode | null = head;
    currentNode;
    currentNode = currentNode.next
  )
    n++;
  const dummy: ListNode = { val: 0, next: head };
  let p0 = dummy;
  let currentNode = p0.next;
  let prevNode: ListNode | null = null;
  for (; n >= 2; n -= 2) {
    for (let i = 0; i < 2; i++) {
      const nextNode = currentNode?.next;
      currentNode!.next = prevNode;
      prevNode = currentNode!;
      currentNode = nextNode!;
    }
    const nextNode = p0.next;
    p0.next!.next = currentNode;
    p0.next = prevNode;
    p0 = nextNode!;
  }
  return dummy.next;
}
// @lc code=end
