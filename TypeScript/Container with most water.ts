//Container with most water
/**
 * @param {number[]} height
 * @return {number}
 */
{const case1 : number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7]; //49

function maxArea(height: number[]): number {
  let maxArea: number = 0;
  let left: number = 0;
  let right: number = height.length - 1;

  while (left < right) {
    let currentValue : number = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentValue);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(maxArea(case1));
}