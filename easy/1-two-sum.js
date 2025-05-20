/**
 * 🧠 LeetCode Problem: Two Sum
 * 🔗 https://leetcode.com/problems/two-sum/description/
 * ⚡ Difficulty: Easy
 */

// ✅ Solution:
function twoSum(nums, target) {
    // Initialize a map to store number -> index pairs
    const map = new Map();
    
    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement that would sum up to the target
        const complement = target - nums[i];
        
        // Check if the complement already exists in the map
        if (map.has(complement)) {
            // If yes, return indices of complement and current number
            return [map.get(complement), i];
        }
        
        // Otherwise, add current number and index to map
        map.set(nums[i], i);
    }

    // If no solution, return empty array (not expected as per problem constraints)
    return [];
}