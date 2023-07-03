// function removeElement(arr, target){
//     var index=arr.indexOf(target);
//     if(index>-1){
//         arr.splice(index,1);
//     }
//     return arr;
// }
// console.log(removeElement([2,5,9,6],5));

function find(arr,target){
    var k=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]!=target){
            k.push(arr[i]);
        }
    }
    return k;
}
console.log(find([2,5,9,6],5));