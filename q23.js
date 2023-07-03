function find(str){
    if(str.length<=1){
        return str;
    }
    var btw=str-1;
    var btw=str.substring(1,str.length-1);
    return (str.charAt(str.length-1)) +btw+ str.charAt(0);
}
console.log(find('praveen'));