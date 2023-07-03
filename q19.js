function find(integer){
    return ((Math.abs(100-integer)<=20) || (Math.abs(400-integer)<=20));
}
console.log(find(90));
console.log(find(200));
console.log(find(10));