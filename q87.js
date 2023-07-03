function find(a1,a2){
    var kdiff=0;
    for(var i=0;i<a1.length;i++){
        if(a1[i]!=a2[i])kdiff++;
        if(kdiff>2)return false;
    }
    return kdiff==0|| kdiff==2;
}
console.log(find([1,2,3,4,5],[1,3,2,4,5]));