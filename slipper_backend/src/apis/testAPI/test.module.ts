import { Module } from '@nestjs/common';
import { TestAPIResolver } from './test.resolver';

@Module({
  providers: [TestAPIResolver],
})
export class TestAPIModule {}
