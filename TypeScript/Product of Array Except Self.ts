//Product of Array Except Self
/**
 * @param {nums} number[]
 * @return {answer} number[]
 */
{
  const case1: number[] = [1, 2, 3, 4];

  function productExceptSelf(nums: number[]): number[] {
    const result: Array<number> = [];
    let product: number = 1;
    for (let i = 0; i < nums.length; i++) {
      result[i] *= product;
      product *= nums[i];
    }

    product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= product;
      product *= nums[i];
    }
    return result;
  }
  console.log(productExceptSelf(case1));
}
