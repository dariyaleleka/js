"use strict";
console.log('Was loaded.');

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(arr);
// console.log(arr.reverse());

// function reverseArr(data){
//   for(var i=data.length -1; i>=0; i--){
//      console.log();
//   }
// }

// reverseArr(arr);



// function reverseArr(data) {
//   console.log("length: " + arr.length);
//   // var temp = [];
//   var tempEl;
//   for (i = 0; i < arr.length/2; i++){
//     console.log(data[i]);
//     console.log("left: " + data[i]);
//     console.log("rigth: " + data[arr.length - i - 1]);


//     tempEl = data[i];
//     data[i] = data[arr.length - i - 1];
//     data[arr.length - i - 1] = tempEl;

//   }
//   return data;
// }

// console.log(reverseArr(arr));

//  for( var i=0; i < arr.lenght; i++){
//   if(arr[i]%2 == 1){
//     console.log(arr[i]);
//   } 
//  }

// var odd_arr = [];

// метод for each
// arr.forEach(function(el,i,dif_arr ){
//   if (arr[i] % 2 == 1) {
//    console.log(arr[i]);
//   }
// });


// метод map 

// var add_arr.map(function(el,i,dif_arr) {
//   if(dif_arr[i]%2){
//     console.log(arr[i]);
//     return arr[i];
//   }
// });


// метод filter 

// выводит только четные
// var odd_arr = arr.filter (function(al,i,dif_arr){
//   return dif_arr[i]%2 == 0;
// });

// console.log(odd_arr);


// var arr = [12, 3, 5, 8, 1, 6, 7, 9, 2, 10, 11, 4];

// function sortArr(data){
  
//   var tempEl;
//   for(var i = 0; i < data.length; i++){

//     console.log("Main loop" + data[i]);

//     for(var j = 0; j < data.length; j++){
//       console.log(data[j]);
//        if(data[i] < data[j]){
//          tempEl = data[i];
//          data[i] = data[j];
//          data[j] = tempEl;

//          console.log("Array" + data)
//          continue;
//        }
//     }
//   }
  
//   return data;
// }

// sortArr(arr);
// console.log(arr.sort());


// пузырьковый метод сортировки !! знать для собеседованияк
// function sortArr(data){
//   var count = 0
//   for (var i = data.length; i >= 0; i--) {
//     console.log("i: " +i);
//     for (var j = 0; j < i; j++) {
//       console.log(data[j]);
//       if (data[i] < data[j]) {
//          tempEl = data[i];
//          data[i] = data[j];
//          data[j] = tempEl;
//       }
//     }
//       console.log("----------");
//   }
  
//   console.log("Count: " + count)
//   return data;
// }

// console.log(sortArr(arr));




// // задача 
// var arr = [12, 3, 5, 8, 1, 6, 7, 9, 2, 10, 11, 4];
// var state;
// function arrNumbers(data, condition) {
//  for(var i = 0; i < data.length; i++) {
//    console.log(data[i] > 5);
//    if (data[i] <= condition){
//      state = false;
//      break;
//    }
//  }
//   return state;
// }
//////////////
// var state;
// state = arr.some(function(el) {
//   return el > 12;
// });

// if (state) {
//   console.log("Yes it`s correct!")
// } else {
//   console.log("No, it`s wrong!!!")
// }