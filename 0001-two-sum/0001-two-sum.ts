function twoSum(nums: number[], target: number): number[] {
    const numIndicesMap: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement exists in the map
        if (numIndicesMap.hasOwnProperty(complement)) {
            // Return the indices if found
            return [numIndicesMap[complement], i];
        }

        // Store the current number and its index in the map
        numIndicesMap[currentNum] = i;
    }

    // Return an empty array if no solution is found
    return [];
}