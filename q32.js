function find(a,b){
    a1=100-a;
    b1=100-b;
    if(Math.abs(a1)>Math.abs(b1))return 'a is greater';
    return 'b is greater';
}
console.log(find(10,20));
console.log(find(876,98765))