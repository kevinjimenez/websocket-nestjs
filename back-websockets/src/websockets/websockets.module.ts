import { Module } from '@nestjs/common';
import { ClienteGateway } from './cliente/cliente.gateway';

@Module({
  providers: [ClienteGateway],
})
export class WebsocketsModule {}
