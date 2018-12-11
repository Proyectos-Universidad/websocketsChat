import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { base_api_url } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: any;
  constructor() {
    this.socket = io(base_api_url);
  }

  sendMessage(message){
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
  }

}
