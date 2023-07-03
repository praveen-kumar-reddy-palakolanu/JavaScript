function find(a,b,k){
    if((a%k==0 && b%k==0)||(a%k!=0  && b%k!=0)){
        return true;
    }
    return false;
}
console.log(find(12,24,4));
console.log(find(10,20,4));