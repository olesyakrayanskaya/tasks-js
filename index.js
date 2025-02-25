let removeDuplicates = function (nums) {
    let count = 0;
    let last = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== last) {
            nums[count] = nums[i];
            last = nums[i];
            count++;
        }
    }
    return count;
};

let maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};

module.exports = maxProfit;
