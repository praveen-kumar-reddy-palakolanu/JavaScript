function find(a){
    if(a.length<1)return 'array inputs shoulld be >=1';
    var t=a[0];
    a[0]=a[a.length-1];
    a[a.length-1]=t;
    return a;
}
console.log(find([10,20,30,40,50]));