function find(a,b){
    if ((x>=40 && x<=60 && y>=40 && y<=60) || (x>=70 && x<=100 && y>=70 && y<=100)){
        return true;
    }
    return false;
}
console.log(find(88,93));
console.log(find(70, 95));