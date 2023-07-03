function findCT(celsius){
    var Ctemp=celsius;
    var CtoF=(Ctemp*1.8)+32;
    var res=Ctemp+' C is='+CtoF+' F';
    console.log(res);
}
function findFT(fahrenheit){
    var Ftemp=fahrenheit;
    var FtoC=(Ftemp-32)*(5/9);
    var res=Ftemp+' F is='+FtoC+' C';
    console.log(res);
}
findCT(60);
findFT(98);