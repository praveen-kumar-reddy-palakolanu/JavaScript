const arr=[1,2,3,4,5,6,7,8,9];
arr.sort((a,b)=>0.5-Math.random());
console.log(arr);

// function shuffleArray(arr){
//     var n=arr.length;
//     var temp,k;
//     while(n>0){
//         k=Math.floor(Math.random()*n);
//         n--;
//         temp=arr[n];
//         arr[n]=arr[k];
//         arr[k]=temp;
//     }
//     return arr;
// }
// console.log(shuffleArray(1,2,3,4,5));