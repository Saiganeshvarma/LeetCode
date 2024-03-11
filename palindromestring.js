var myNum = -121
var num = myNum.toString()
var isPalindrome = true
for(var i = 0 ; i<num.length/2 ; i++){
    if(num[i] != num[num.length -i -1]){
        isPalindrome = false
    }
}
if(isPalindrome == true){
    console.log(true);
}else{
    console.log(false);
}