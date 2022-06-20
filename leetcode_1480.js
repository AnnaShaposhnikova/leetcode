//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

//Return the running sum of nums.

//Example 1:

//Input: nums = [1,2,3,4]
//Output: [1,3,6,10]
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

//Example 2:

//Input: nums = [1,1,1,1,1]
//Output: [1,2,3,4,5]
//Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

////Example 3:

//Input: nums = [3,1,2,10,1]
//Output: [3,4,6,16,17]

const runningSum = function (nums) {
    let arrRunningSum = [];
    if (!Array.isArray(nums)) {
        return;
    }
    if (nums.length <= 1 || nums.length >= 1000) {
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        const min = -Math.pow(10, 6);
        const max = Math.pow(10, 6);
        if (nums[i] <= min || nums[i] >= max) {
            return;
        }
        if (i === 0) {
            arrRunningSum.push(nums[i]);
        } else {
            arrRunningSum.push(nums[i] + arrRunningSum[i - 1]);
        }
    }
    return arrRunningSum;
};

const runningSum2 = function (nums) {
     if (!Array.isArray(nums)) {
         return;
     }
     if (nums.length <= 1 || nums.length >= 1000) {
         return;
     }
      return nums.reduce((acc, element, index)=>{

       const min = -Math.pow(10, 6);
       const max = Math.pow(10, 6);
         if (element <= min || element >= max) {
             return;
         }
         if(index === 0){
             acc.push(element)
         }else{          
              acc.push(element + acc[index-1])
         }
       
         return acc;
     },[]);

};

console.log(runningSum2([1, 1, 1, 1, 1]));
