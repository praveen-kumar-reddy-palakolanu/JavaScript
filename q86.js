function find(angle){
    if(angle>=0 && angle<90)return "Acute angle";
    else if(angle==90)return "Right angle";
    else if(angle>90 && angle<=180)return "Obtuse angle";
    else if(angle==180) return "Stright angle";
    else return "Please!! enter correct angle.";
}
console.log(find(175));