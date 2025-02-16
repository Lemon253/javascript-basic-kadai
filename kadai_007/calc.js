let num = Math.floor(Math.random() * 30);
//確認用
/*let num = 15;
console.log(num);
*/
//条件式
if (num == 0) {
  console.log("代入された値は0です")
} else if (num % 3 == 0 && num % 5 ==0) {
  console.log("3と5の倍数です")
} else if (num % 3 == 0 && num % 5 > 0) {
  console.log("3の倍数です")
} else if (num % 3 > 0 && num % 5 == 0) {
  console.log("5の倍数です")
} else {
  console.log("num = "+ num);
}