import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Observable } from 'rxjs';
// const io = require('socket.io-client');

// @WebSocketGateway(3002, {
//   namespace: '/chat',
//   cors: { origin: ['*'] },
// })
// {
//   cors: {
//     origin: [
//       'https://hoppscotch.io',
//       'http://localhost:3000',
//       'http://localhost:4200',
//     ],
//   },
// }
@WebSocketGateway()
export class ClienteGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
    console.log('Init cliente');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('cliente -> conexion de aperadora', client.id, args);
  }

  handleDisconnect(client: any) {
    console.log('disconnect', client.id);
  }

  @SubscribeMessage('mensaje') //nombre del evento
  crearCliente(client, payload): Observable<any> {
    console.log('Entro a cliente gateway', client.id);
    console.log(payload);
    // solo envia a uno
    // client.emit('mensaje', payload);
    //emite a todos
    this.server.emit('mensaje', payload);
    return payload; // la peticion
  }

  // @SubscribeMessage('crearSala') //nombre del evento
  // crearSala(client, data): Observable<any> {
  //   console.log('Entro a cliente gateway', client.id);
  //   client.broadcast.this._salaService.create(data).then((respuesta) => {
  //     console.log('se creo', respuesta);
  //   });
  //   return data; // la peticion
  // }

  // @SubscribeMessage('mensajeUsuario') //nombre del evento
  // buscarUsuario(client, data): Observable<WsResponse<number>> {
  //   console.log('Entro a cliente gateway', client.id);
  //   client.id = data;
  //   console.log('mensaje', client.id);
  //   client.broadcast.emit('enviarMensaje', data);
  //   return data; // la peticion
  // }

  // @SubscribeMessage('mensajeUsuario') //nombre del evento
  // mensajeUsuario(client, data): Observable<WsResponse<number>> {
  //   console.log('Entro a cliente gateway', client.id);
  //   client.id = data;
  //   console.log('mensaje', client.id);
  //   client.broadcast.emit('enviarMensaje', data);
  //   return data; // la peticion
  // }
}
