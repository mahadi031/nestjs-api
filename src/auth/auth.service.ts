import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return 'Successfully Login!';
  }

  signup() {
    return { msg: 'I am Signed up' };
  }

  signin() {
    return { msg: 'I am Signed in' };
  }
}
