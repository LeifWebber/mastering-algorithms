function candy(ratings: number[]): number {
  let i = 0;
  let candy = [1];
  while (i < ratings.length - 1) {
    if (ratings[i] < ratings[i + 1]) {
      candy.push(candy[i] + 1);
      i++;
    } else {
      candy.push(1);
      i++;
    }
  }
  i--;
  while (i >= 0) {
    if (ratings[i] > ratings[i + 1] && candy[i] <= candy[i + 1]) {
      candy[i] = candy[i + 1] + 1;
    }
    i--;
  }

  return candy.reduce(
    (accummulator, currentValue) => accummulator + currentValue,
  );
}

console.log(candy([3, 2, 1, 1, 4, 3, 3]));
