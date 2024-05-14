
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

var twoSum = function(nums,target){
    for(var i = 0 ; i<nums.length ; i++){
        for(var j = 1 ; j<nums.length ; j++){
            if(myArray[i]+myArray[j] == target){
                return [i,j]
            }

        }
    }
    return []
}
var myArray = [2, 7, 11, 15]
target = 9
var result = twoSum(myArray,target)
console.log(result);