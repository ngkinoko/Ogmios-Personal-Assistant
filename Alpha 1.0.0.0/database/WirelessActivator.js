// Ogmios Personal Assistant
// Wireless Activator 1.0

// �����F����́A�I�����C���ʐM�V�X�e���𗘗p���āA�����WirelessActivator�𓋍ڂ����o�[�W����
// �@�@�@��Ogmios�֒ʒm�𑗐M������A�\�����ʕs����������ꂽ�ꍇ�ɓ��ڂ���Ogmios�𗘗p�s�\
// �@�@�@�ɂ��āA�v���I�ȃo�O��h�����肷�邱�Ƃ��ł���悤�ɂ�����̂ł���B
// �@�@�@�����̍ہA���葤�ɒʒm�͂����Ȃ����A���葤��Ogmios�Ƀz�[���y�[�W�ɃA�N�Z�X���A��Ԃ��m
// �@�@�@�@�F����悤�ɑ������Ƃ��ł���B

// Alpha�� 2.0��������\��B

// Wireless Activator��L���ɂ�����Ogmios���Őݒ肵�Ă����K�v������X�N���v�g�Q

/*

 if ( isMessage == true ){
  writeto("ogmios.org���烁�b�Z�[�W�����M����܂����B");
  setTimeout(MessageOn(),2000);
 }

 if ( isDisable == true ){
  writeto("Ogmios.org���A���g����Ogmios�̃o�[�W�����̗��p���~���܂����B\n\n�ڍׂɂ��ẮA�z�[���y�[�W���������������B");
 }

*/

// Wireless Activator��L���ɂ�����Ogmios���Őݒ肵�Ă����K�v������head�^�O��script�^�O

/*

 <script src="http://www.Ogmios.html.xdomain/WirelessActivator.js"></script>

*/ (�����Ŏw�肳���t�@�C���́A���̃X�N���v�g�t�@�C���ł���B)

// ��������A���ۂɕK�v�ɂȂ�֐�

isEnable_WirelesActivator = true;

var isMessage;

function MessageOn(){
 
 writeto("�V�����o�[�W������Ogmios�������[�X����܂����B"); // �����ɕ\������ʒm����͂���
}

var isDisable = false; // ������true�ɂ��邱�ƂŁAOgmios�̎g�p���~���邱�Ƃ��ł���B
