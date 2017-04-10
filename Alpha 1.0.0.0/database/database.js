// Ogmios Personal Assistant
// Conversastion Database
// for Alpha 1.0
// Programmed by Ogmios.org ( http://www.ogmios.org/ )

// どれかの文章解析用関数にヒットした際に、ほかの関数を実行してエラーを出さないためのフラグ

var isHitSentence = false;

// deleteSymbols関数で、語尾の記号を削除する。

function deleteSymbols(text){
 var last = text.length;
 var sentence;

 var deleted = last -1;
 
 var lastletter = text.charAt(last -1); 
 
switch(lastletter){
  case "。":
   sentence = text.substr(0,deleted);
   return sentence;
   break;
  
  case "！":
   sentence = text.substr(0,deleted);
   return sentence;
   break;
 
  case "？":
   sentence = text.substr(0,deleted);
   return sentence;
   break;

  case ".":
   sentence = text.substr(0,deleted);
   return sentence;
   break;

  case "!":
   sentence = text.substr(0,deleted);
   return sentence;
   break;

  case "?":
   setntence = text.substr(0,deleted);
   return sentence;
   break;
 
  default:
   return text;
   break;
 }
}


// deleteDo関数　「～して」が語尾に来ている場合の「～して」を削除するための関数

function deleteDo(text){
 var lastletter = text.length -1;
 var Find = text.charAt(lastletter);

 if ( Find == "て" ){
  lastletter --;
  Find = text.charAt(lastletter);
  if( Find == "し"){
   var deleted = text.substr(0,lastletter);
   return deleted;
  }
  else{
   return text;
  }
 }
 else{
  return text;
 }
}

// askDoyouknow関数　「～って知ってる？」という文章用の関数

var findwindow;

function askDoyouknow(text){
 var lastletter = text.length -1;
 var Find = text.charAt(lastletter);

 if( Find == "る" ){
  lastletter --;
  Find = text.charAt(lastletter);
   if( Find == "て" ){
    lastletter --;
    Find = text.charAt(lastletter);
     if( Find == "っ"){
      lastletter --;
      Find = text.charAt(lastletter);
       if( Find == "知" || Find == "し" ){
        lastletter --;
        Find = text.charAt(lastletter);
         if( Find == "て"){
          lastletter --;
          Find = text.charAt(lastletter);
           if( Find == "っ"){
            Find = text.substr(0,lastletter);
            writeto(Find + "についてGoogleで検索します。");
            findwindow = window.open("http://www.google.co.jp/search?q=" + Find + "");
            isHitSentence = true;
           }
          }
         }
        }
       }
      }
}


//　単純な単語への応答用関数

function words(text){
 if( isHitSentence == false ){
 switch(text){
  case "おはよう" :
   writeto("おはようございます。");
   break;

  case "こんにちは":
   writeto("こんにちは。");
   break;

  case "こんばんは":
   writeto("こんばんは。");
   break;

  case "さようなら":
   bye();
   break;

  case "またね":
   bye();
   break;

  case "検索画面を閉じて":
   findwindow.close();
   writeto("検索画面を閉じました。");
   break;

  case "検索画面をとじて":
   findwindow.close();
   writeto("検索画面を閉じました。");
   break;

  case "検索画面を閉じる":
   findwindow.close();
   writeto("検索画面を閉じました。");
   break;

  case "検索画面をとじる":
   findwindow.close();
   writeto("検索画面を閉じました。");
   break;

  case "Google":
   writeto("Googleを開きます。");
   window.open("http://www.google.co.jp/");
   break;

  case "グーグル":
   writeto("Googleを開きます。");
   window.open("http://www.google.co.jp/");
   break;

  case "メニューを表示":
   Menu();
   break;
 
  default:
   writeto("すみません。よく分かりませんでした。");
   break;

  }
 }
 else{
  isHitSentence = false;
 }
}


// 「～を～で検索」という文章に対応するための関数。

function findin(text){
 var lastletter = text.length -1;
 var Find = text.charAt(lastletter);

 if( Find == "索"){
  lastletter--;
  Find = text.charAt(lastletter);
  if( Find == "検"){
   lastletter--;
   Find = text.charAt(lastletter);
   if( Find == "で"){
    lastletter--;
    Find = text.charAt(lastletter);
    if( Find == "b" || Find == "B" || Find == "ブ" ){
     lastletter--;
     Find = text.charAt(lastletter);
     if( Find == "e" || Find == "E" || Find == "ェ" ){
      lastletter--;
      Find = text.charAt(lastletter);
      if( Find == "w" || Find == "W" || Find == "ウ" ){
       lastletter --;
       Find = text.charAt(lastletter);
       if( Find == "を"){
        var target = text.substr(0,lastletter);
        writeto(target + "をWebで検索します。");
        findwindow = window.open("http://www.google.com/search?q=" + target);
        isHitSentence = true;
       }
      }
     }
    }
   }
  }
 }
}