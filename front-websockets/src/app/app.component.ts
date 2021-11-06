import { ChatService } from './chat.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sockets';
  constructor(
    private readonly _chatService:ChatService
  ){}

  enviar(){
    this._chatService.sendMessage();
  }
}
