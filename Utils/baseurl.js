const BASE_URL = 'http://gomasterapi.ikaart.org/';

export const API = {
  LOGIN_API: BASE_URL + '/token',
  REGISTRATION_API: BASE_URL + '/token',
  FORGOT_PASSWORD: BASE_URL + '/api/GripMaster/ForGotPassword',
  RESET_PASSWORD: BASE_URL + '/api/GripMaster/ChangePasswordByEmail',
  STORE_IMAGE_API: BASE_URL + '/api/GripMaster/UploadImages',
  GET_VERIFICATION_LINK: BASE_URL + '/api/GripMaster/GetVerificationLink',
  VERIFY_USER_BY_EMAIL: BASE_URL + '/api/GripMaster/VerifyUserByEmail',
};
// AIzaSyA00WU0wtU_OzHF8C0yUmShOinN0kOXYgs
