function removeDuplicates(nums,myArray) {
    var newArray = [];
    for (var i = 0; i < nums.length; i++) {
        if (!newArray.includes(myArray[i])) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

 myArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(myArray));
