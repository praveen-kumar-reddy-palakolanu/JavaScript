function find(a,n){
    if(a==null)return void 0;
    if(n==null)return a[0];
    if(n<0)return [];
    return a.slice(0,n);
}
console.log(find([7, 9, 0, -2]));
console.log(find([],3));
console.log(find([7, 9, 0, -2],3));
console.log(find([7, 9, 0, -2],6));
console.log(find([7, 9, 0, -2],-3));