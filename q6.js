function leapyear(year){
    return ((year%400==0) ? (year%100==0) : (year%4==0))
}
console.log(leapyear(2012));
console.log(leapyear(2015));
console.log(leapyear(2024));