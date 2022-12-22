import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from '../../entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageResolver } from './message.resolver';
import { SController } from './s.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessageService, MessageResolver],
  // ajout de controllers qui gèrent les requêtes HTTP et renvoient une réponse au client.
  controllers: [SController],
})
export class MessageModule {}
