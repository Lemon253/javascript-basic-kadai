const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","春分の日","スポーツの日","文化の日","勤労感謝の日"]
const holidaysCount = holidays.length;//配列の要素数
let count = 0;

console.log(holidaysCount);
//for文
for(let i = 0; i < holidaysCount; i++) {
  console.log(holidays[i]);
}
//while文
//変数countの値が配列の要素数と同じになるまで、変数numの値を出力し続ける
while(count != holidaysCount) {
  console.log(holidays[count]);
  count++;
}