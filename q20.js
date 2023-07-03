var a=[1,2,3,4,5,6,3,7,4,,9,9];
const dup=[];
a.sort();
for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            dup.push(a[i]);
        }   
    }
}
console.log(dup);