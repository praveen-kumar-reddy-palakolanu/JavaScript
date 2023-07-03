function find(a,b,c){
    a=a%10;
    b=b%10;
    c=c%10;
    if(a==b && b==c)return true;
    else return false;
}
console.log(find(1,2,3))
console.log(find(10,20,30));