/*!
 * Copyright © 2025 LeavesWebber
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * Feel free to contact LeavesWebber@outlook.com
 */

/*
 * @lc app=leetcode.cn id=2215 lang=typescript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const setA = new Set(nums1);
  const setB = new Set(nums2);
  return [
    [...setA].filter((e) => !setB.has(e)),
    [...setB].filter((e) => !setA.has(e)),
  ];
}
// @lc code=end
