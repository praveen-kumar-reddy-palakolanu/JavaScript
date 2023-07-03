//------sortfuntion-------

// var a=[8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(a.sort());

//-------bubblesort---------

// function bubbleSort(arr){
//     var storedArr=arr.slice();
//     for(var i=0;i<arr.length;i++){
//         for(var j=0;j<arr.length-1;j++){
//             if(storedArr[j]>storedArr[j+1]){
//                 var temp=storedArr[j];
//                 storedArr[j]=storedArr[j+1];
//                 storedArr[j+1]=temp;
//             }
//         }
//     }
//     return storedArr;
// }
// var array=[-3, 8, 7, 6, 5, -4, 3, 2, 1];
// var storedArr=bubbleSort(array);
// console.log(storedArr.join(','));

//--------selectionsort-----------

// function selectionSort(arr){
//     var sortedArr=arr.slice();
//     for(var i=0;i<arr.length-1;i++){
//         var minIndex=i;
//         for(var j=i+1;j<arr.length;j++){
//             if(sortedArr[j]<sortedArr[minIndex]){
//                 minIndex=j;
//             }
//         }
//         if(minIndex!==i){
//             var temp=sortedArr[i];
//             sortedArr[i]=sortedArr[minIndex];
//             sortedArr[minIndex]=temp;
//         }
//     }
//     return sortedArr;
// }
// var array=[-3, 8, 7, 6, 5, -4, 3, 2, 1];
// var storedArr= selectionSort(array);
// console.log(storedArr.join(','));