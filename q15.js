var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th", "st", "nd", "rd"];

for (var i=0;i<color.length;i++) {
//   var storeOrd = (i + 1) > 3 ? o[i] : o[i + 1];
var storeOrd;
if(i+1===1){
    storeOrd=o[1];
}
else if(i+1===2){
    storeOrd=o[2];
}
else if(i+1===3){
    storeOrd=o[3];
}
else{
    storeOrd=o[0];
}
  var ans=(i + 1)+storeOrd+" choice is "+color[i]+".";
  console.log(ans);
}
