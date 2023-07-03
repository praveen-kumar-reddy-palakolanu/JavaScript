function find(x,y,k){
    if(x%k==0 && y%k==0 || x%k!=0 && y%k!=0)return true;
    return false;
}
console.log(find(100,200,5));
console.log(find(28,35,7));
console.log(find(12,16,3));
