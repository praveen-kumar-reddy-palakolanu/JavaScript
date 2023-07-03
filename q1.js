var is_array=function(a){
    if(toString.call(a)=='[object Array]')
        return true;
    return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1,2,4,0]));