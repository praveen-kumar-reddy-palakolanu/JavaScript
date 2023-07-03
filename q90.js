function find(a,n){
    a.sort(function(a,b){
        return b-a;
    });
    return a[n-1];
}
console.log(find([12,9,4,7,1,3,6],3));