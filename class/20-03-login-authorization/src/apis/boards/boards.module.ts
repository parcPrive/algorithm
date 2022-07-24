import { Module } from '@nestjs/common';
import { BoardsResolver } from './boards.resolver';
import { BoardsService } from './boards.service';

@Module({
  // imports: [],
  // controllers: [AppController],
  providers: [BoardsService, BoardsResolver],
})
export class BoardModule {}
