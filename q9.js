function find(str)
{
    var ansStr='';
    for(var i=0;i<str.length;i++)
    {
        const kChar=str.charAt(i);
        if(kChar==kChar.toUpperCase())
        {
            ansStr+=kChar.toLowerCase();
        }
        else
        {
            ansStr+=kChar.toUpperCase();
        }
    }
    return ansStr;
}
console.log(find('The Quick Brown Fox'));