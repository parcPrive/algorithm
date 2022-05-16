import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtservice: JwtService) {}

  getAccessToken({ user }) {
    return this.jwtservice.sign(
      { email: user.email, sub: user.id },
      { secret: 'myAccessKey', expiresIn: '120s' },
    );
  }

  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtservice.sign(
      { email: user.email, sub: user.id },
      { secret: 'myRefreshKey', expiresIn: '2w' },
    );
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);
    // 배포환경
    // res.setHeader('Access-Control-Allow-Origin', 'https://myfrontsite.com')
    // res.setHeader(
    //   'Set-Cookie',
    //   `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly;`
    // )
  }
}
