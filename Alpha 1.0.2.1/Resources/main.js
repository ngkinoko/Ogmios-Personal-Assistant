// Ogmios Personal Assistant
// Program Main Library
// Programmed by ogmios.org ( http://www.ogmios.org/ )

// setCookie(); getCookie();�������Ƃ�expires�i�L�������j��1�N�Ԃɐݒ肳��Ă���B

// Cookie�ݒ�p�̊֐��B������key��Cookie�̑������Adata�ɁA�w�肵���������̃f�[�^��������

function setCookie(key,data){
 var outdata = key + "=" + escape(data);
 var now = new Date();
 var yy = now.getFullYear();
 yy ++;
 now.setFullYear(yy);
 var extime = now.toGMTString();
 document.cookie = outdata + ";expires =" + extime;
}

// Cookie�擾�p�̊֐��B����key�ɁA�擾������Cookie�̑���������͂��āA�߂�l�Ńf�[�^���擾����B

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