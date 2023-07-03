function find(a){
    var mcount=0;
    var rescount;
    for(var i=0;i<a.length;i++){
        var k=0;
        for(var j=0;j<a.length;j++){
            if(a[i]==a[j])k++;
        }
        if(k>mcount){
            mcount=k;
            rescount=a[i];
        }
    }
    return rescount;
}
console.log(find([1,2,2,3,4,2,4,5]));