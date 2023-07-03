function find(x){
    var k=x-19
    if((Math.abs(k))>19){
        return k*k*k;
    }
    return k;
}
console.log(find(25));
console.log(find(18));
console.log(find(50));