function groupAnagrams(strs: string[]): string[][] {
  const ans: string[][] = [];
  const map = new Map();
  for (const str of strs) {
    // 把每一个子串里的每一个字符转成 ASCII 码并排序、拼接
    const temp: number[] = [];
    for (let i = 0; i < str.length; i++) {
      temp.push(str.codePointAt(i)!);
    }
    temp.sort();
    const num = temp.toString();
    if (map.get(num)) map.set(num, [...map.get(num), str]);
    else map.set(num, [str]);
  }
  ans.push(...map.values());
  return ans;
}
