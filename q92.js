function find(a){
    var kmax=-1;
    for(var i=0;i<a.length-1;i++){
        var temp=Math.abs(a[i]-a[i+1]);
        kmax=Math.max(kmax,temp);
    }
    return kmax;
}
console.log(find([1,2,3,8,4,5,9]));