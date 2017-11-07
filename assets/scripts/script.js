var romanarr = new Array("M","CM", "D", "CD", "CCC", "CC", "C", "XC", "L", "XL", "XXX", "XX", "X", "IX", "V", "IV", "III", "II", "I");
//The roman array which contains unique combinations of the roman numerals

var numericarr = new Array(1000,900,500,400,300,200,100,90,50,40,30,20,10,9,5,4,3,2,1); 
//The numeric array corresponsing to the roman array
var incorrectarr = new Array("CMCM","CMD","CMCD", "CMC", "DD", "DCD", "CDCD", "CDC", "CCCC", "XCXC","XCL", "XCXL", "XCX", "LL", "LXL", "XLXL", "XLX", "XXXX", "IXIX","IXV", "IXIV", "IXI", "IVIV", "IVI", "IIII");
//The sequence of the roman numerals which are not allowed

var replacearr= new Array("MDCCC", "MCD","MIII", "M","M","CM","DCCC", "D","CD","CLXXX", "CXL", "CIII", "C","C","XC","LXXX", "L","XL","XVIII", "XIV", "XIII", "X","VIII", "V","IV");
//The replacement for the incorrect sequence 


function convertArabic() {
  //Initialize a variable result to zero
  var result = 0;
  //Get the value of the inputed Roman Numeral
  var rom = document.getElementById("roman_numeral").value;
  //Initialize new variable roman and replace the empty spaces entered by the user
  var roman = rom.replace(/ /g, "");
  //Input converted to Uppercase
  roman = roman.toUpperCase();
  //Any other characters other than IVXLCDM replace them
  roman = roman.replace(/[^IVXLCDM]/g, "");
  //Update the final value 
  document.getElementById("roman_numeral").value=roman;
  //If blank input, result is updated 
  if (roman.length == 0){
    document.getElementById("arabic_numeral").innerHTML = "";
    return;
  }
  var pos = 0;
  var positonindex = -1
  //Check until pos is greater than the roman sequence
  while(pos < roman.length){
    var nextletter = getnextroman(roman, pos);
    if (positonindex != 0){
      //Checks if the next letter is greater than than the previous letter in the roman sequence and throws appropriate error
      if ( numericarr[positonindex] < numericarr[nextletter] ){
        document.getElementById("arabic_numeral").innerHTML = "Error!! "+romanarr[nextletter]+" is not supposed to follow "+romanarr[positonindex];
        return;
      }
    }
    if(nextletter < 0)
      return;
    pos += romanarr[nextletter].length; //alert(pos);
    //append the position as the sequence is traversed
    result += numericarr[nextletter];
    //The result is appended as the position is given from the getnextletter
    positonindex = nextletter;
  }
  document.getElementById("arabic_numeral").innerHTML =result;
}

function getnextroman(roman, pos)
{
  //Check the sequence of roman letters
  for (i=0; i<incorrectarr.length; i++){
    if ( roman.indexOf(incorrectarr[i], pos) == pos ){
      //Checks the position at which the roman sequence is incorrect and suggests replacement
      //alert(pos);
      document.getElementById("arabic_numeral").innerHTML = incorrectarr[i] + " is incorrect.Replace it with " + replacearr[i] + ".";
      return -1;
    }
  }
  //Check the Roman array for the specific values and return the corresponding numeric value
  for (i=0; i<romanarr.length; i++){
    if ( roman.indexOf(romanarr[i], pos) == pos)
      return i;
  }
  document.getElementById("arabic_numeral").innerHTML = "Invalid at the position " +pos;
  return -1;
}



