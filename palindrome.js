// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var num = 121
var originalNumber = num
var remainder = 0
var reverse = 0 ;
while(num!=0){
    remainder =  num%10
    reverse = reverse*10+remainder
    num = Math.floor(num/10)
}
if(reverse == originalNumber){
    console.log(true);
}else{
    console.log(false);
}