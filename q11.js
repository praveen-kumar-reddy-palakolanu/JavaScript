function sumSquares(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        const square=Math.pow(arr[i],2);
        sum+=square;
    }
    return sum;
}
console.log(sumSquares([1,2,3,4,5]));