import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardImage } from '../BoardImage/boardImage.entity';
import { Board } from './board.entity';
import { BoardResolver } from './board.resolver';
import { BoardService } from './board.service';

@Module({
  imports: [TypeOrmModule.forFeature([Board, BoardImage])],
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
