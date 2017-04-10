// Ogmios Personal Assistant
// Wireless Activator 1.0

// 説明：これは、オンライン通信システムを利用して、特定のWirelessActivatorを搭載したバージョン
// 　　　のOgmiosへ通知を送信したり、予期せぬ不具合が発見された場合に搭載したOgmiosを利用不可能
// 　　　にして、致命的なバグを防いだりすることができるようにするものである。
// 　　　※この際、相手側に通知はいかないが、相手側のOgmiosにホームページにアクセスし、状態を確
// 　　　　認するように促すことができる。

// Alpha版 2.0から実装予定。

// Wireless Activatorを有効にしたいOgmios側で設定しておく必要があるスクリプト群

/*

 if ( isMessage == true ){
  writeto("ogmios.orgからメッセージが送信されました。");
  setTimeout(MessageOn(),2000);
 }

 if ( isDisable == true ){
  writeto("Ogmios.orgが、お使いのOgmiosのバージョンの利用を停止しました。\n\n詳細については、ホームページをご覧ください。");
 }

*/

// Wireless Activatorを有効にしたいOgmios側で設定しておく必要があるheadタグのscriptタグ

/*

 <script src="http://www.Ogmios.html.xdomain/WirelessActivator.js"></script>

*/ (ここで指定されるファイルは、このスクリプトファイルである。)

// ここから、実際に必要になる関数

isEnable_WirelesActivator = true;

var isMessage;

function MessageOn(){
 
 writeto("新しいバージョンのOgmiosがリリースされました。"); // ここに表示売る通知を入力する
}

var isDisable = false; // ここをtrueにすることで、Ogmiosの使用を停止することができる。
