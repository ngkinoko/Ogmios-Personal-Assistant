// Ogmios Personal Assistant
// Event Database Ver.1.0
// ����́A���{���Ogmios�����́A���s���ȂǂɊւ��郌�X�|���X�̂��߂̃f�[�^�x�[�X�ł���B
// Programmed by ngkinoko

// ���̌��ɍs���Ȃǂ����邩�������ɂ񂷂邽�߂̊֐��B

function event_check(){
 switch ( dm ){
  case 1:
   switch ( dd ){
    case 1:
     writeto("�����܂��Ă��߂łƂ��������܂��B");
     break;

    case 11:
     writeto("�����͋��J���̓��ł��B");
     break;
    }
    break;

  case 2:
   switch ( dd ){
    case 14:
     if( ogUsersex == "male" ){
      writeto("�o�����^�C���A�ْ����܂��ˁB");
     }
     else if ( ogUsersex == "female" ){
      writeto("�`���R�̏����͂ł��܂������H");
     }
     break;
   }
   break;

  case 3:
   switch ( dd ){
    case 3:
     writeto("�����͂ЂȍՂ�ł��B");
     break;
   }
   break;
  
  case 12:
   switch ( dd ){
    case 24:
     alert("�N���X�}�X�C�u");
     writeto("�����̓N���X�}�X�E�C���ł��B");
     break;

    case 25:
     writeto("�����̓N���X�}�X�ł��B");
     break;

    case 31:
     if ( ogUsernamecall == "first" ){
      writeto( ogUsernamefirst + "�����1�N�Ԃ͂ǂ��ł������H");
     }
     else if ( ogUsernamecall == "last" ){
      writeto( ogUsernamelast + "�����1�N�Ԃ͂ǂ��ł������H");
     }
    break;
   }
  break;
}
}