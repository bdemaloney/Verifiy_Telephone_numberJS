function telephoneCheck(str) {

  var flag = 0;
// checks for illegal chars and open paranthesis
  var isAlpha = str.match(/[a-z]/g),
      isIllegalChar = str.match(/[!$%^&*]/g),
      isLegalChar = str.match(/[-\)]/),
      oP = str.match(/\(/g),
      cP = str.match(/\)/g); //

  if (isAlpha !== null) {// checks for alpha 
    flag++;
  } else if (isIllegalChar !== null) { //symbols besides "()-"
    flag++;
  } else if (cP !== null && oP === null ||
            cP === null && oP !== null) { //checks for open paranthesis
    flag++;
  } else if (str.charAt(0) == isLegalChar) {
    flag++;
  }
  
// verifies  3 digits between paranthesis
  var oPi = str.search(/\(/g),
      cPi = str.search(/\)/g),
      aC = str.slice(oPi+1,cPi).match(/[0-9]/g).length;
  
  if (oP !== null && cP !== null && aC !== 3) {
    flag++;
  }

// verifies 10 digits & if a country code that it is = 1
  var l = str.match(/[0-9]/g).length;
  var nums = str.match(/[0-9]/g);
  if (l === 11 && nums[0] != 1) { // checks if CC is 0 & has 10 ints
      flag += 1;
  } else if (l > 11 || l < 10) {
    flag++;
  }
  
 // if no flags raised its OK
  if (flag > 0) {
    return false;
  } else { 
    return true;  
  }
  
}
