function find(str){
    var lstr="";
    for(var i=0;i<str.length;i++){
        var cstr=str[i];
        if(csum.length > lstr.length){
            lstr=cstr;
        }
    }
    return lstr;
}
console.log(find(["praveen","hemanth","saiganesh","pattabi","kodi"]));