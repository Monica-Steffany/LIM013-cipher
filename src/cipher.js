const cipher = {
  encode:  (offset,string) =>{
    let result="";
    if (offset===null || offset===0){
      throw new TypeError(); 
    }
    for (let i = 0; i < string.length; i++) {
      let getAscii=string.charCodeAt(i);
      if (getAscii>=65 && getAscii<=90){
        let formula = (getAscii - 65 + parseInt(offset))% 26 + 65;
        result+= String.fromCharCode(formula);
      } else if (getAscii>=97 && getAscii<=122) {
        let formula = (getAscii - 97 + parseInt(offset))% 26 + 97;
        result+= String.fromCharCode(formula);
      }
      else {
        result+= string[i];
    }
  
  }
    return result;
  },
  
  decode: (offset,string) =>{
    let result="";
    if (offset===null || offset===0){
      throw new TypeError(); 
    }
    for (let i = 0; i < string.length; i++) {
      let getAscii=string.charCodeAt(i);
      if (getAscii>=65 && getAscii<=90){
        let formula = ((getAscii + 65) - parseInt(offset))% 26 + 65;
        result+= String.fromCharCode(formula);
      } else if (getAscii>=97 && getAscii<=122) {
        let formula = ((getAscii - 97 - parseInt(offset)+52))% 26 + 97;
        result+= String.fromCharCode(formula);
      }
      else {
        result+= string[i];
    }
    }
    return result;
  }
};

export default cipher;
