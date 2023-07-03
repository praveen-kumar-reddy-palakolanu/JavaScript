function find(marks,exam){
    if(exam){
        return marks>=90;
    }
    return (marks>=89 && marks<=100);
}
console.log(find(99,'true'));
console.log(find(88,'true'));