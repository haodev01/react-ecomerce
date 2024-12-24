import PostDetailScreen from '~/screens/post/post=detail-screen.tsx';
import PostUserScreen from '~/screens/post/post-user-screen.tsx';

export const listApi = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  CONFIRM_OTP: 'auth/active-user',
  SEND_OTP_FORGOT_PASSWORD: 'auth/send-otp-forgot-password',
  FORGOT_PASSWORD: 'auth/forgot-password',
  LIST_POST: 'posts/user-tourguide',
  POST_DETAIL: 'posts/user-tourguide',
  GET_COMMENT: 'comments',
  CREATE_POST: 'posts/user-tourguide',
  GET_LIST_POST_USER: 'posts/user',
};

export const routesName = {
  LoginScreen: 'LoginScreen',
  RegisterScreen: 'RegisterScreen',
  ConfirmOtpScreen: 'ConfirmOtpScreen',
  HomeScreen: 'HomeScreen',
  ForgotPassword: 'ForgotPassword',
  TabHome: 'TabHome',
  PostDetailScreen: 'PostDetailScreen',
  CommentDetailScreen: 'CommentDetailScreen',
  TourDetailScreen: 'TourDetailScreen',
  TourScreen: 'TourScreen',
  CartScreen: 'CartScreen',
  CreatePostScreen: 'CreatePostScreen',
  PostUserScreen: 'PostUserScreen',
};
