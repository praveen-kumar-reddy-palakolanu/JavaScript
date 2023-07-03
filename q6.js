var n='025648'
var k=[n[0]];
for(var i=1;i<n.length;i++){
    if(n[i-1]%2==0 && n[i]%2==0){
        k.push('-',n[i]);
    }
    else{
        k.push(n[i]);
    }
}
console.log(k.join(''));