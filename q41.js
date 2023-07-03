function find(a,b,c){
    if(a==b && b==c){
        return 30;
    }
    if(a==b||b==c||c==a){
        return 40;
    }
    else return 20;
}
console.log(find(8,8,8));
console.log(find(10,10,30));
console.log(find(9,4,10));