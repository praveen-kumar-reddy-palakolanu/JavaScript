function find(n1,n2){
    if((n1<0 && n2>0) || n1>0 && n2<0){
        return true;
    }
    return false;
}

console.log(find(10,-20));
console.log(find(-100,50));
console.log(find(60,70));