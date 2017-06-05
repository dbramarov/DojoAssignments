//Unique Words
// function UW(phrase){
//   var rOBJ = {};
//   var hold = phrase.split(" ");
//   console.log(hold);
//   var result = '';
//   for (var i = 0; i < hold.length; i++) {
//     rOBJ[hold[i]] = 1;
//   }
//   for (var key in rOBJ) {
//     result += key + " "
//   }
//   console.log(result);
//   return result
// }
//
// UW("Sing! Sing a song; sing out loud; sing out strong.")

//Rotate String
function RotateString(str, num) {
  var str_arr = str.split("");
  var temp;
  for(var i = str_arr.length-1; i >= str_arr.length-num; i--) {
    temp = str_arr[i];
    str_arr.unshift(temp);
    i++;
  }
  str_arr.length -= num;
  var ans = str_arr.join("");
  console.log(ans);
  return ans
}
//
var strger = "Boris Godunov"
// // var strger = "The Eagles are the worst team"
//
// RotateString(strger, 5)

// var strger2 = "dunovoris Go"
//
// function IonRot(str1, str2) {
//   console.log('Hey');
//   var flag = true;
//   var i = 1;
//   while(flag){
//     var ans = RotateString(str1, i)
//     if(ans === str2){
//       break;
//     }
//     if(i >= str1.length){
//       flag = false;
//     }
//     i++;
//   }
//   console.log(flag);
//   return flag;
// }
//
//
// IonRot(strger, strger2);

//String Encode
// function StringEndcode(str){
//   var str_arr = str.split("");
//   var val = str_arr[0];
//   var count = 1;
//   var ans_arr = [];
//
//   for (var i = 1; i <= str_arr.length; i++) {
//     if(str_arr[i] == val){
//       count++;
//     }
//     else{
//       ans_arr.push(val);
//       ans_arr.push(count);
//       count = 1;
//       val = str_arr[i];
//     }
//   }
//   console.log(ans_arr.join(""));
//   return ans_arr.join("");
// }
//
// StringEndcode("aaaabbcccdddeeeeeeeee")

//String Decode
// function DeCode(str){
//   var result = '';
//   for (var i = 1; i <= str.length; i += 2) {
//     for (var z = 0; z < str[i]; z++) {
//       result += str[i-1];
//     }
//   }
//   console.log(result);
//   return result
// }
//
// DeCode('a4b2c1d3');








































//Break
