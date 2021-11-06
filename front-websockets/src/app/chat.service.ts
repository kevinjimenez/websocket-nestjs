import { SocketService } from './socket.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: SocketService) {}

  sendMessage() {
    console.log('dio');

    this.socket.emit('crearCliente', 'hola');
  }
}
