function find(a,n){
    if(a==null)return void 0;
    if(n==null)return a[a.length-1];
    return a.slice(Math.max(a.length-n,0));
}
console.log(find([7, 9, 0, -2]));
console.log(find([7, 9, 0, -2],3));
console.log(find([7, 9, 0, -2],6));