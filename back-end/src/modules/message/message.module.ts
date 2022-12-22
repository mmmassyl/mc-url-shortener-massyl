import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from '../../entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageResolver } from './message.resolver';
import { SController } from './s.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessageService, MessageResolver],
  controllers: [SController],
})
export class MessageModule {}
