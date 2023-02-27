export function addition(...nums) {
  let result = BigInt(nums[0])
  for (let i = 1; i < nums.length; i++) {
    result += BigInt(nums[i])
  }
  return result
}

export function subtraction(...nums) {
  let result = BigInt(nums[0])
  for (let i = 1; i < nums.length; i++) {
    result -= BigInt(nums[i])
  }
  return result
}

export function multiplication(...nums) {
  let result = BigInt(nums[0])
  for (let i = 1; i < nums.length; i++) {
    result *= BigInt(nums[i])
  }
  return result
}

export function division(...nums) {
  let result = BigInt(nums[0])
  for (let i = 1; i < nums.length; i++) {
    result /= BigInt(nums[i])
  }
  return result
}