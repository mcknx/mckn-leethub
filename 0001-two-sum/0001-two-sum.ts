function twoSum(nums: number[], target: number): number[] {
    const numIndicesMap: Record<number, number> = {}
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        let complement = target - currentNum
        
        if (numIndicesMap.hasOwnProperty(complement)) {
            return [numIndicesMap[complement], i]
        }
        
        numIndicesMap[currentNum] = i
    }
    
    return []
}