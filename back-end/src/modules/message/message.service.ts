import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../../entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  save(message: string) {
    console.log(message);
    
    return this.messageRepository.save({ message, shortUrl: `${new Date().getTime()}` });
  }

  findAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  findByUrl(url: string): Promise<Message> {
    return this.messageRepository.findOne({ where: { shortUrl: url }});
  }
}
