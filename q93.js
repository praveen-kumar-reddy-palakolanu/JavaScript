function find(a){
    a.sort();
    return Math.abs(a[a.length-1]-a[0]);
}
console.log(find([1,2,3,4,5]));