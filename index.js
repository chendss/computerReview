// 计算布尔二叉树的值
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const evaluateTree = function (root) {
  const { val, left, right } = root
  if (val === 0) {
    return false
  } else if (val === 1) {
    return true
  } else {
    if (val === 2) {
      return evaluateTree(left) || evaluateTree(right)
    } else {
      return evaluateTree(left) && evaluateTree(right)
    }
  }
}

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  const dict = {}
  for (let index = 0; index < numbers.length; index++) {
    const n = numbers[index]
    if (dict[target - n] != null) {
      return [index, dict[target - n]]
    }
    dict[n] = index
  }
  return []
}