// Bubble sort program
// [10,9,8,3,6,7,8,1]

function bubbleSort(myArray){
    var length = myArray.length
    for(var i = 0 ; i<myArray.length ; i++){
        for(var j = 0 ; j<myArray.length ; j++){
            if(myArray[j] > myArray[j+1]){
                var temp = myArray[j]
                myArray[j] = myArray[j+1]
                myArray[j+1] = temp
            }
        }
    }
    return myArray

}
myArray = [10,9,8,3,6,7,8,1]

console.log(bubbleSort(myArray));

