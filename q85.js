function find(a){
    var sum=[0,0];
    for(var i=0;i<a.length;i++){
        var k=i%2;
        sum[k]+=a[i];
    }
    return sum;
}
console.log(find([1,2,3,4,5,6,7]));