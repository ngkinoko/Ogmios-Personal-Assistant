// Ogmios Personal Assistant
// Program Main Library
// Programmed by ogmios.org ( http://www.ogmios.org/ )

// setCookie(); getCookie();も両方ともexpires（有効期限）は1年間に設定されている。

// Cookie設定用の関数。引数のkeyにCookieの属性名、dataに、指定した属性名のデータを代入する

function setCookie(key,data){
 var outdata = key + "=" + escape(data);
 var now = new Date();
 var yy = now.getFullYear();
 yy ++;
 now.setFullYear(yy);
 var extime = now.toGMTString();
 document.cookie = outdata + ";expires =" + extime;
}

// Cookie取得用の関数。引数keyに、取得したいCookieの属性名を入力して、戻り値でデータを取得する。

function getCookie(key){
 var tmp = document.cookie + ";";
 var s = tmp.indexOf(key);
 if ( s == -1){
  return("");
 } else{
   s = s + key.length + 1;
   var e = tmp.indexOf(";",s);
   var data0 = tmp.substring(s,e);
   var data = unescape(data0);
   return(data);
  }
}