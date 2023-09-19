//Top K Frequent Elements
/**
 * @param {nums} number[]
 * @return {number[]}
 */
{
    const case1 = {
        nums: [1, 1, 1, 2, 2, 3],
        k: 2,
    };
    function topKFrequent(nums, k) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            }
            else {
                map.set(nums[i], 1);
            }
        }
        const arr = Array.from(map.entries());
        arr.sort((a, b) => b[1] - a[1]);
        return arr.slice(0, k).map((item) => item[0]);
    }
    console.log(topKFrequent(case1.nums, case1.k));
}
