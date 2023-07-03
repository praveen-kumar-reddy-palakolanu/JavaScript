function find(a,b){
    if((a>=40) && (a<=60) && (b>=40 && b<=60)){
        if(a==b){
            return 'Both numbers are same';
        }
        else if(a>b){
            return a;
        }
        else {
            return b;
        }
    }
        else return 'numbers are not in range';
}
console.log(find(40,59));
console.log(find(20,45));