import { codeToText } from "./wethertojapanes.js";
import { changeimges } from "./changeimages.js";


const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

//ボタンで天気を取得+テキストで分岐させる
document.getElementById("getBtn1").addEventListener("click", () => {
  if ( text1.textContent == "ロンドン"){
    getWeather1();
  }
  else {
    getWeather5();
  }
});
//ボタンで天気を取得+テキストで分岐させる
document.getElementById("getBtn2").addEventListener("click", () => {
  if (text2.textContent == "ワシントンD.C."){
      getWeather2();
    }
  else {
      getWeather6();
    }
});
//ボタンで天気を取得+テキストで分岐させる
document.getElementById("getBtn3").addEventListener("click", () => {
  if (text3.textContent == "東京"){
     getWeather3();
    }
  else {
    getWeather7();
    }
});
//ボタンで天気を取得+テキストで分岐させる
document.getElementById("getBtn4").addEventListener("click", () => {
  if (text4.textContent == "名古屋"){
     getWeather4();
    }
  else {
    getWeather8();
    }
});
//エラーにする
document.getElementById("getBtn9").addEventListener("click", () => {
  getWeather9();
});
document.getElementById("getBtn10").addEventListener("click", () => {
  getWeather10();
});
document.getElementById("getBtn11").addEventListener("click", () => {
  getWeather11();
});
document.getElementById("getBtn12").addEventListener("click", () => {
  getWeather12();
});

//文字と画像を変更
document.getElementById("getBtn5").addEventListener("click", () => {
   if (text1.textContent == "ロンドン"){
      text1.textContent = "ホノルル";
      changeimges("images1",0);
    }
    else {
      text1.textContent = "ロンドン";
      changeimges("images1",1);
      
    }
});
//文字と画像を変更
document.getElementById("getBtn6").addEventListener("click", () => {
   if (text2.textContent == "ワシントンD.C."){
    text2.textContent = "カイロ";
    changeimges("images2",2);
    }
    else {
      text2.textContent = "ワシントンD.C.";
      changeimges("images2",3);
    }
});
//文字と画像を変更
document.getElementById("getBtn7").addEventListener("click", () => {
   if (text3.textContent == "東京"){
      text3.textContent = "ローマ";
      changeimges("images3",4);
    }
    else {
      text3.textContent = "東京";
      changeimges("images3",5);
    }
});
//文字と画像を変更
document.getElementById("getBtn8").addEventListener("click", () => {
   if (text4.textContent == "名古屋"){
      text4.textContent = "ベルリン";
      changeimges("images4",6);
    }
    else {
      text4.textContent = "名古屋";
      changeimges("images4",7);
    }
});

// ロンドンの天気と時刻と気温と風速を取得して表示する関数
async function getWeather1() {
 // ロンドンの現在の天気を取得するURL
const url= "https://api.open-meteo.com/v1/forecast?latitude=51.30&longitude=0.07&current_weather=true&timezone=Europe/London";;
  
try {
  //URLにデータ
const response = await fetch(url);
  //返ってきたデータをJSONとして取り出す
const data = await response.json();
const time = data.current_weather.time;
const temp = data.current_weather.temperature;
const wind = data.current_weather.windspeed;
const code = data.current_weather.weathercode;

 //codeを引数にして天気を日本語で変換する
 const weather = codeToText(code);

//DOM表示
//時刻
document.getElementById("time1").textContent =`時刻:${time}`;

//天気
document.getElementById("wether1").textContent =`天気:${weather}`;

//気温と風速
document.getElementById("temp1").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

//コンソール表示
console.log(data);
   
} catch (error) {  //エラー   
   console.error("取得に失敗しました:", error);
   document.getElementById("temp1").textContent = "取得に失敗しました";
}
}

//ワシントン
async function getWeather2() {
  // ワシントンの現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=38.894&longitude=-77.036&current_weather=true&timezone=America/New_York";

  try {
    //URLにデータ
  const response = await fetch(url);

  //返ってきたデータをJSONとして取り出す
  const data = await response.json();

  const time = data.current_weather.time;
  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;
  const code = data.current_weather.weathercode;

 //codeを引数にして天気を日本語で変換する
  const weather = codeToText(code);

  //DOM表示
  //時刻
  document.getElementById("time2").textContent =`時刻:${time}`;

  //天気
  document.getElementById("wether2").textContent =`天気:${weather}`;

  //気温と風速
  document.getElementById("temp2").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;
  
  } catch (error) {//エラー   
    console.error("取得に失敗しました:", error);
    document.getElementById("temp2").textContent = "取得に失敗しました";
  }
}

//東京
async function getWeather3() {
  // 東京の現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=36.6895&longitude=139.6917&current_weather=true&timezone=Asia/Tokyo";

  try {
   //URLにデータ
  const response = await fetch(url);

  //返ってきたデータをJSONとして取り出す
  const data = await response.json();

  const time = data.current_weather.time;
  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;
  const code = data.current_weather.weathercode;

  //codeを引数にして天気を日本語で変換する
  const weather = codeToText(code);

  //DOM表示
  //時刻
  document.getElementById("time3").textContent =`時刻:${time}`;

  //天気
  document.getElementById("wether3").textContent =`天気:${weather}`;

  //気温と風速
  document.getElementById("temp3").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

  //コンソール表示
  console.log(data);
  } catch (error) {//エラー
    console.error("取得に失敗しました:", error);
    document.getElementById("temp3").textContent = "取得に失敗しました";
  }
}

async function getWeather4() {
  //名古屋の現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=35.18&longitude=136.91&current_weather=true&timezone=Asia/Tokyo";

  try {
      //URLにデータ
  const response = await fetch(url);

  //返ってきたデータをJSONとして取り出す
  const data = await response.json();

  const time = data.current_weather.time;
  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;
  const code = data.current_weather.weathercode;

  //codeを引数にして天気を日本語で変換する
  const weather = codeToText(code);

  //DOM表示
  //時刻
  document.getElementById("time4").textContent =`時刻:${time}`;

  //天気
  document.getElementById("wether4").textContent =`天気:${weather}`;

  //気温と風速
  document.getElementById("temp4").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

  //コンソール表示
  console.log(data);
  } catch (error) {//エラー
    console.error("取得に失敗しました:", error);
    document.getElementById("temp4").textContent = "取得に失敗しました";
  }
}
// ホノルル
async function getWeather5() {
  // ホノルルの現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=21.18&longitude=-157.51&current_weather=true&timezone=Pacific/Honolulu";

  try {
     //URLにデータ
  const response = await fetch(url);

  //返ってきたデータをJSONとして取り出す
  const data = await response.json();

  const time = data.current_weather.time;
  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;
  const code = data.current_weather.weathercode;

  //codeを引数にして天気を日本語で変換する
  const weather = codeToText(code);

  //DOM表示
  //時刻
  document.getElementById("time1").textContent =`時刻:${time}`;

  //天気
  document.getElementById("wether1").textContent =`天気:${weather}`;

  //気温と風速
  document.getElementById("temp1").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

  //コンソール表示
  console.log(data);
  } catch (error) {//エラー
    console.error("取得に失敗しました:", error);
    document.getElementById("temp1").textContent = "取得に失敗しました";
  }
}
// カイロ
async function getWeather6() {
  // カイロの現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=30.03&longitude=31.15&current_weather=true&timezone=Africa/Cairo";

  try {
     //URLにデータ
  const response = await fetch(url);

  //返ってきたデータをJSONとして取り出す
  const data = await response.json();

  const time = data.current_weather.time;
  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;
  const code = data.current_weather.weathercode;

  //codeを引数にして天気を日本語で変換する
  const weather = codeToText(code);

  //DOM表示
  //時刻
  document.getElementById("time2").textContent =`時刻:${time}`;

  //天気
  document.getElementById("wether2").textContent =`天気:${weather}`;

  //気温と風速
  document.getElementById("temp2").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

  //コンソール表示
  console.log(data);
  } catch (error) {//エラー
    console.error("取得に失敗しました:", error);
    document.getElementById("temp2").textContent = "取得に失敗しました";
  }
}
// ローマ
async function getWeather7() {
  // ローマの現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=41.5335&longitude=12.2858&current_weather=true&timezone=Europe/Rome";

  try {
    //URLにデータ
  const response = await fetch(url);

  //返ってきたデータをJSONとして取り出す
  const data = await response.json();

  const time = data.current_weather.time;
  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;
  const code = data.current_weather.weathercode;

  //codeを引数にして天気を日本語で変換する
  const weather = codeToText(code);

  //DOM表示
  //時刻
  document.getElementById("time3").textContent =`時刻:${time}`;

  //天気
  document.getElementById("wether3").textContent =`天気:${weather}`;

  //気温と風速
  document.getElementById("temp3").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

  //コンソール表示
  console.log(data);
  } catch (error) {//エラー
    console.error("取得に失敗しました:", error);
    document.getElementById("temp3").textContent = "取得に失敗しました";
  }
}
// ベルリン
async function getWeather8() {
  // ベルリンの現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=52.31&longitude=13.23&current_weather=true&timezone=Europe/Berlin";
  try {
     //URLにデータ
  const response = await fetch(url);

  //返ってきたデータをJSONとして取り出す
  const data = await response.json();

  const time = data.current_weather.time;
  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;
  const code = data.current_weather.weathercode;

  //codeを引数にして天気を日本語で変換する
  const weather = codeToText(code);

  //DOM表示
  //時刻
  document.getElementById("time4").textContent =`時刻:${time}`;

  //天気
  document.getElementById("wether4").textContent =`天気:${weather}`;

  //気温と風速
  document.getElementById("temp4").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

  //コンソール表示
  console.log(data);
  } catch (error) {//エラー
    console.error("取得に失敗しました:", error);
    document.getElementById("temp4").textContent = "取得に失敗しました";
  }
}
//絶対にエラーを表示するためのもの
async function getWeather9() {
const url= "https://api.open-meteo.com/v1/forecast?latitude=51.30&longitude=0.07&current_weather=true&timezone=Europe/London";;
  
try {
  //URLにデータ
const response = await fetch(url);
  //返ってきたデータをJSONとして取り出す
const data =  response.json();//エラーにするためにawaitを抜いている
const time = data.current_weather.time;
const temp = data.current_weather.temperature;
const wind = data.current_weather.windspeed;
const code = data.current_weather.weathercode;

 //codeを引数にして天気を日本語で変換する
 const weather = codeToText(code);

//DOM表示
//時刻
document.getElementById("time1").textContent =`時刻:${time}`;

//天気
document.getElementById("wether1").textContent =`天気:${weather}`;

//気温と風速
document.getElementById("temp1").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

//コンソール表示
console.log(data);
   
} catch (error) {  //エラー   
   console.error("取得に失敗しました:", error);
   document.getElementById("time1").textContent = "取得に失敗しました";
   document.getElementById("wether1").textContent = "取得に失敗しました";
   document.getElementById("temp1").textContent = "取得に失敗しました";
}
}
async function getWeather10() {
const url= "https://api.open-meteo.com/v1/forecast?latitude=51.30&longitude=0.07&current_weather=true&timezone=America/New_York";;
  
try {
  //URLにデータ
const response = await fetch(url);
  //返ってきたデータをJSONとして取り出す
const data =  response.json();//エラーにするためにawaitを抜いている
const time = data.current_weather.time;
const temp = data.current_weather.temperature;
const wind = data.current_weather.windspeed;
const code = data.current_weather.weathercode;

 //codeを引数にして天気を日本語で変換する
 const weather = codeToText(code);

//DOM表示
//時刻
document.getElementById("time2").textContent =`時刻:${time}`;

//天気
document.getElementById("wether2").textContent =`天気:${weather}`;

//気温と風速
document.getElementById("temp2").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

//コンソール表示
console.log(data);
   
} catch (error) {  //エラー   
   console.error("取得に失敗しました:", error);
   document.getElementById("time2").textContent = "取得に失敗しました";
   document.getElementById("wether2").textContent = "取得に失敗しました";
   document.getElementById("temp2").textContent = "取得に失敗しました";
}
}
async function getWeather11() {
const url= "https://api.open-meteo.com/v1/forecast?latitude=51.30&longitude=0.07&current_weather=true&timezone=Asia/Tokyo";;
  
try {
  //URLにデータ
const response = await fetch(url);
  //返ってきたデータをJSONとして取り出す
const data =  response.json();
const time = data.current_weather.time;//エラーにするためにawaitを抜いている
const temp = data.current_weather.temperature;
const wind = data.current_weather.windspeed;
const code = data.current_weather.weathercode;

 //codeを引数にして天気を日本語で変換する
 const weather = codeToText(code);

//DOM表示
//時刻
document.getElementById("time3").textContent =`時刻:${time}`;

//天気
document.getElementById("wether3").textContent =`天気:${weather}`;

//気温と風速
document.getElementById("temp3").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

//コンソール表示
console.log(data);
   
} catch (error) {  //エラー   
   console.error("取得に失敗しました:", error);
   document.getElementById("time3").textContent = "取得に失敗しました";
   document.getElementById("wether3").textContent = "取得に失敗しました";
   document.getElementById("temp3").textContent = "取得に失敗しました";
}
}
async function getWeather12() {
const url= "https://api.open-meteo.com/v1/forecast?latitude=51.30&longitude=0.07&current_weather=true&timezone=Asia/Tokyo";;
  
try {
  //URLにデータ
const response = await fetch(url);
  //返ってきたデータをJSONとして取り出す
const data =  response.json();//エラーにするためにawaitを抜いている
const time = data.current_weather.time;
const temp = data.current_weather.temperature;
const wind = data.current_weather.windspeed;
const code = data.current_weather.weathercode;

 //codeを引数にして天気を日本語で変換する
 const weather = codeToText(code);

//DOM表示
//時刻
document.getElementById("time4").textContent =`時刻:${time}`;

//天気
document.getElementById("wether4").textContent =`天気:${weather}`;

//気温と風速
document.getElementById("temp4").textContent =`気温:${temp}℃ / 風速:${wind} km/h`;

//コンソール表示
console.log(data);
   
} catch (error) {  //エラー   
   console.error("取得に失敗しました:", error);
   document.getElementById("time4").textContent = "取得に失敗しました";
   document.getElementById("wether4").textContent = "取得に失敗しました";
   document.getElementById("temp4").textContent = "取得に失敗しました";
}
}