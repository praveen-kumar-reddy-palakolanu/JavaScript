function find(n1,n2){
    if(n1==8||n2==8)return true;
    if((n1+n2)==8 || Math.abs(n1-n2)==8) return true;
    else return false;
}
console.log(find(12,4));
console.log(find(10,20));