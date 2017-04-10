// Ogmios Personal Assistant
// Event Database Ver.1.0
// これは、日本語版Ogmios向けの、月行事などに関するレスポンスのためのデータベースである。
// Programmed by ngkinoko

// その月に行事などがあるかをかくにんするための関数。

function event_check(){
 switch ( dm ){
  case 1:
   switch ( dd ){
    case 1:
     writeto("明けましておめでとうございます。");
     break;

    case 11:
     writeto("今日は鏡開きの日です。");
     break;
    }
    break;

  case 2:
   switch ( dd ){
    case 14:
     if( ogUsersex == "male" ){
      writeto("バレンタイン、緊張しますね。");
     }
     else if ( ogUsersex == "female" ){
      writeto("チョコの準備はできましたか？");
     }
     break;
   }
   break;

  case 3:
   switch ( dd ){
    case 3:
     writeto("今日はひな祭りです。");
     break;
   }
   break;
  
  case 12:
   switch ( dd ){
    case 24:
     alert("クリスマスイブ");
     writeto("今日はクリスマス・イヴです。");
     break;

    case 25:
     writeto("今日はクリスマスです。");
     break;

    case 31:
     if ( ogUsernamecall == "first" ){
      writeto( ogUsernamefirst + "さんの1年間はどうでしたか？");
     }
     else if ( ogUsernamecall == "last" ){
      writeto( ogUsernamelast + "さんの1年間はどうでしたか？");
     }
    break;
   }
  break;
}
}