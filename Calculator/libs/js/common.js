"use strict";

var a 
var b 
var x


a = prompt("Введите число: ");
b = prompt("Введите второе число: ");
x = prompt("Введите символ: ");


switch (x) 
{
  case '+': alert(+a + +b);
  break;

  case '-': alert(a - b);
  break;
2
  case '*': alert(a * b);
  break;

  case '/': alert(a / b);
  break;

  default: alert("wrong!");
  break;
}
console.log("Знаение: ", x)