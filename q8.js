var a=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
var k=0;
for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;i++){
        if(a[i]==a[j]){
            k++;
        }
    }
    console.log(k);
}