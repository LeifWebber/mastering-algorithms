// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 时间复杂度 O(n log n) + O(n) = O(n log n)
function longestConsecutive(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let ans: number = 0
    let temp: number = 0
    let prev: number | undefined
    for (const n of nums) {
        if (prev === undefined || n === prev + 1) {
            temp++
            prev = n
        } else if (n === prev) continue
        else {
            ans = Math.max(temp, ans)
            temp = 1
            prev = n
        }
    }
    ans = Math.max(temp, ans)
    return ans
};

