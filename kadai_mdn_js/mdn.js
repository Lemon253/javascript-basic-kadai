/*
//今日の日付データ取得
const today = new Date();
console.log(today);
*/

/*
//指定日のデータ取得
const specified_day = new Date(2024,10,12);
//確認用
console.log(specified_day);

let year = specified_day.getFullYear();
let month = specified_day.getMonth();
let day = specified_day.getDate();

//出力
console.log(year + "年" + month + "月" + day + "日" );
*/

//関数を用いた日付データの表示
function sampleDate(date, format){

  //文字列を生年月日に置換
  format = format.replace(/YYYY/,date.getFullYear());
  format = format.replace(/MM/,date.getMonth() +1);
  format = format.replace(/DD/,date.getDate());

  return format;
}

//関数sampleDateの引数 deteに日付情報、formatに指定の文字列（YYYY年MM月DD日）を渡す
console.log(sampleDate(new Date(), "YYYY年MM月DD日"));