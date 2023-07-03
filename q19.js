function findSum(a1,a2){
    var ans=[];
    var maxLength=Math.max(a1.length,a2.length);
    for(var i=0;i<maxLength;i++){
        var sum=(a1[i] || 0)+(a2[i] || 0);
        ans.push(sum);
    }
    return ans;
}

var a1 = [1, 0, 2, 3, 4];
var a2 = [3, 5, 6, 7, 8, 13];

var output = findSum(a1, a2);
console.log(output); 