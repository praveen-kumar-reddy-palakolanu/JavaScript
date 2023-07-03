function binarySearch(arr,k){
    var left=0,right=arr.length-1;
    while(right>=left){
        var mid=Math.floor((left+right)/2);
        if(arr[mid]===k)return mid;
        else if(arr[mid]<k){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return -1;
}

var items=[1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(items,1));
console.log(binarySearch(items,5));
