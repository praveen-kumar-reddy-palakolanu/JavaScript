function find(num){
    if(num%3==0 ||num%7==0){
        return 'Nmber is a multiple of 3 or 7';
    }
    return 'Not a multiple';
}

console.log(find(21));
console.log(find(100));
console.log(find(365));