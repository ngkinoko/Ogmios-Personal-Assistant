// Ogmios Personal Assistant
// Conversastion Database
// for Alpha 1.0
// Programmed by Ogmios.org ( http://www.ogmios.org/ )

// �ǂꂩ�̕��͉�͗p�֐��Ƀq�b�g�����ۂɁA�ق��̊֐������s���ăG���[���o���Ȃ����߂̃t���O

var isHitSentence = false;

// deleteSymbols�֐��ŁA����̋L�����폜����B

function deleteSymbols(text){
 var last = text.length;
 var sentence;

 var deleted = last -1;
 
 var lastletter = text.charAt(last -1); 
 
switch(lastletter){
  case "�B":
   sentence = text.substr(0,deleted);
   return sentence;
   break;
  
  case "�I":
   sentence = text.substr(0,deleted);
   return sentence;
   break;
 
  case "�H":
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


// deleteDo�֐��@�u�`���āv������ɗ��Ă���ꍇ�́u�`���āv���폜���邽�߂̊֐�

function deleteDo(text){
 var lastletter = text.length -1;
 var Find = text.charAt(lastletter);

 if ( Find == "��" ){
  lastletter --;
  Find = text.charAt(lastletter);
  if( Find == "��"){
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

// askDoyouknow�֐��@�u�`���Ēm���Ă�H�v�Ƃ������͗p�̊֐�

var findwindow;

function askDoyouknow(text){
 var lastletter = text.length -1;
 var Find = text.charAt(lastletter);

 if( Find == "��" ){
  lastletter --;
  Find = text.charAt(lastletter);
   if( Find == "��" ){
    lastletter --;
    Find = text.charAt(lastletter);
     if( Find == "��"){
      lastletter --;
      Find = text.charAt(lastletter);
       if( Find == "�m" || Find == "��" ){
        lastletter --;
        Find = text.charAt(lastletter);
         if( Find == "��"){
          lastletter --;
          Find = text.charAt(lastletter);
           if( Find == "��"){
            Find = text.substr(0,lastletter);
            writeto(Find + "�ɂ���Google�Ō������܂��B");
            findwindow = window.open("http://www.google.co.jp/search?q=" + Find + "");
            isHitSentence = true;
           }
          }
         }
        }
       }
      }
}


//�@�P���ȒP��ւ̉����p�֐�

function words(text){
 if( isHitSentence == false ){
 switch(text){
  case "���͂悤" :
   writeto("���͂悤�������܂��B");
   break;

  case "����ɂ���":
   writeto("����ɂ��́B");
   break;

  case "����΂��":
   writeto("����΂�́B");
   break;

  case "���悤�Ȃ�":
   bye();
   break;

  case "�܂���":
   bye();
   break;

  case "������ʂ����":
   findwindow.close();
   writeto("������ʂ���܂����B");
   break;

  case "������ʂ��Ƃ���":
   findwindow.close();
   writeto("������ʂ���܂����B");
   break;

  case "������ʂ����":
   findwindow.close();
   writeto("������ʂ���܂����B");
   break;

  case "������ʂ��Ƃ���":
   findwindow.close();
   writeto("������ʂ���܂����B");
   break;

  case "Google":
   writeto("Google���J���܂��B");
   window.open("http://www.google.co.jp/");
   break;

  case "�O�[�O��":
   writeto("Google���J���܂��B");
   window.open("http://www.google.co.jp/");
   break;

  case "���j���[��\��":
   Menu();
   break;
 
  default:
   writeto("���݂܂���B�悭������܂���ł����B");
   break;

  }
 }
 else{
  isHitSentence = false;
 }
}


// �u�`���`�Ō����v�Ƃ������͂ɑΉ����邽�߂̊֐��B

function findin(text){
 var lastletter = text.length -1;
 var Find = text.charAt(lastletter);

 if( Find == "��"){
  lastletter--;
  Find = text.charAt(lastletter);
  if( Find == "��"){
   lastletter--;
   Find = text.charAt(lastletter);
   if( Find == "��"){
    lastletter--;
    Find = text.charAt(lastletter);
    if( Find == "b" || Find == "B" || Find == "�u" ){
     lastletter--;
     Find = text.charAt(lastletter);
     if( Find == "e" || Find == "E" || Find == "�F" ){
      lastletter--;
      Find = text.charAt(lastletter);
      if( Find == "w" || Find == "W" || Find == "�E" ){
       lastletter --;
       Find = text.charAt(lastletter);
       if( Find == "��"){
        var target = text.substr(0,lastletter);
        writeto(target + "��Web�Ō������܂��B");
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