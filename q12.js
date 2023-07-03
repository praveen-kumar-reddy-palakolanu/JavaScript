var a=[10,98,61,13,22];
var sum=0;
var pro=1;
for(var i=0;i<a.length;i++){
    sum+=a[i];
    pro*=a[i];
}
console.log('Sum of an array integers are:'+sum+'\n'+'Product of an array of integers are:'+pro);