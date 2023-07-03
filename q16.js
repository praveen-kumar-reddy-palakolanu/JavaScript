function leapYear(startYear,endYear){
    const arr=[];
    for(var i=startYear;i<=endYear;i++){
        if((i%4==0 && i%100!=0)||i%400==0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(leapYear(2000,2023));
