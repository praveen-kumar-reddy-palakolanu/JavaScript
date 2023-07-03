const firstInteger=5;
const secongInteger=6;
const thirdInteger=7;
const sides=(firstInteger+secongInteger+thirdInteger)/2;
const area=Math.sqrt(sides*(sides-firstInteger)*(sides-secongInteger)*(sides-thirdInteger));
console.log(area);