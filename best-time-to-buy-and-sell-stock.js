/**
 * @param {number[]} prices
 * @return {number}
 https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 To solve this problem, we need to find the maximum profit we can achieve by buying and selling the stock on different days. The key idea is to track the minimum price encountered so far and compute the potential profit at each day by subtracting this minimum price from the current price. If the calculated profit is higher than the maximum profit recorded so far, we update the maximum profit.
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;

            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
};
