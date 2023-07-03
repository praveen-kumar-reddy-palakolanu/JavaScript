function find(a,n){
    var msum=0, csum=0;
    for(var i=0;i<n;i++){
        csum+=a[i];
    }
    msum=csum;
    for(var j=0;j<a.length;j++){
        csum-=a[i-n]+a[i];
        msum=Math.max(msum,csum);
    }
    return msum;
}
console.log(find([9,3,5,1,7], 2));