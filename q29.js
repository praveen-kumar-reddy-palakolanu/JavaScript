function find(num1,num2,num3){
    if((num1>=50 && num1<=99) || (num2>=50 && num2<=99) || (num3>=50 && num3<=99))return true;
    else return false;
}
console.log(find(55));
console.log(find(80));
console.log(find(136));