import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../../_services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  message: string;
  messages: string[] = [];

  ngOnInit() {
    console.log('mierda');
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
        console.log(this.messages);
      });
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

}
