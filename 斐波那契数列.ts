// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法

function totalWays(n: number): number {
  if (n === 1 || n === 0) return 1
  return totalWays(n - 1) + totalWays(n - 2)
}
console.log(totalWays(2))
