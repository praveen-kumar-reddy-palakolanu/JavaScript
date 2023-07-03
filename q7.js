var year=2014;
while(year<=2050){
    if((new Date(year, 0, 1)).getDay()===0){
        console.log(year);
    }
    year++;
} 
