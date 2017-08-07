var initVal = 0;
var count = 0;
  
function checkAnargam (s,t) {
  //debugger;
  y = s.split("").sort();
  z = t.split("").sort();
  areAnagrams = true;
  for (i=0; i<y.length && areAnagrams; i++) {
    if(y.length===z.length) {
      if (y[i]===z[i]){
      } else {
        areAnagrams = false;
      }
    }
    else {
      areAnagrams = false;
    }

  }

    return areAnagrams;
}

function windowCreation(str1, str2){
var subStr = str2.slice(initVal, (initVal+str1.length));
console.log(subStr);
initVal = initVal+1;

 var finalStatus = checkAnargam(str1, subStr);
if(finalStatus){
  return alert("true");
}else{
  count = count+1;
  checkSubStringAnargam(str1,str2);
}

}

function checkSubStringAnargam(str1, str2){
  //debugger;
if(str1.length > str2.length){
  return false;
}
var counterLen = Math.floor(str2.length/str1.length);
if(count >= (str2.length - str1.length)+1){
  initVal = 0;
  count = 0;
  return alert("false");
    
}

else{
windowCreation (str1, str2);
}
 
}
