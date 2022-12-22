import { Controller, Get, Param, Res } from '@nestjs/common';
import { MessageService } from 'src/modules/message/message.service';

@Controller('s')
export class SController {
    constructor(private messageService: MessageService) {}

    @Get(":id")
    async redirectToSite(@Param("id") id: string, @Res() res){
      const url = await this.messageService.findByUrl(id);
      
      res.redirect(url.message)
    }
}
