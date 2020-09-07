/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const numNeeded = target - nums[i]
    if (map.has(numNeeded)) {
      return [map.get(numNeeded), i]
    }
    map.set(nums[i], i)
  }
  return [-1, -1]
}
// @lc code=end

// Time: O(n), Space: O(n)
exports.twoSum = twoSum
