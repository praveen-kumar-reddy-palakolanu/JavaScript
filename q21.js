function find(strings){
    if(strings==null || strings.substring(0,2)=='Py'){
        return strings;
    }
    return 'Py'+strings;
}

console.log(find('Python'))
console.log(find('praveen'))