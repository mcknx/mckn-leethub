function twoSum(nums: number[], target: number): number[] {
    const numIndices: Record<number, number>= {}

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i]
        const complement = target - currentNum

        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i]
        }

        numIndices[currentNum] = i
    }

    // base case
    return [];
}