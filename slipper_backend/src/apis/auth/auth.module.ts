import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JWtRfreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';
import { Join } from '../join/entities/join.entity';
import { JoinService } from '../join/join.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([Join]),
  ],
  providers: [
    JWtRfreshStrategy,
    AuthResolver, //
    AuthService,
    JoinService,
  ],
})
export class AuthModule {}
