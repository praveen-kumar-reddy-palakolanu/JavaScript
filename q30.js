function find(str){
    let ans=str;
    if(str.substring(4,10)=='Script'){
        ans=str.substring(0,4)+str.substring(10,str.length);
    }
    return ans;
}

console.log(find('JavaScript'));
console.log(find('PraveenScript'));