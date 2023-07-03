function find(str) {
    var ch=str.split("");
    for(var i = 0;i<ch.length;i++) {
      var n =ch[i].charCodeAt()-'a'.charCodeAt();
      n=(n+1)%26; 
      ch[i]=String.fromCharCode(n+'a'.charCodeAt());
    }
    return ch.join("");
  }
console.log(find("praveen"));