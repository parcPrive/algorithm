import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CrontabService } from './crontab.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [CrontabService],
})
export class CrontabModule {}
