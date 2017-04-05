var _ = {

   map: function(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
   },

   reduce: function(arr,callback,index) { 
     var memo = arr[index]; //var memo = arr[0]
     for (var i = index+1; i < arr.length; i++) {
      memo = callback(memo,arr[i]);
     }
     return memo;
   },

   find: function(arr, callback) {   
     for (var i = 0; i < arr.length; i++) {
      if(callback(arr[i]) == true){
        return arr[i];
      }
     }
   },

   filter: function(arr, callback) { 
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
          newArr.push(arr[i]);
        }
     }
     return newArr;
   },

   reject: function(arr, callback) { 
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(!callback(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
   }
 }

var reduce = _.reduce([1,2,3], function(memo, num){return memo + num;}, 0);
console.log(reduce);
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].
// var map = _.map([1,2,3,4,5,6,7,8,9], function(num){ return num*3;});
// console.log(map);
// var reject = _.reject([1,8,5,6,3,8,2], function(num){return num % 2 ==0;});
// console.log(reject);
// var find = _.find([1, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(find);