import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient: any;
  private messageSubject: Subject<any> = new Subject<any>();

  connect(username: string) {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/public',(message: any) =>{
        this.messageSubject.next(JSON.parse(message.body));
      });
      this.stompClient.send(
        '/app/chat.addUser',
        {},
        JSON.stringify({ sender: username, type: 'JOIN' })
      );
    });
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }

  sendMessage(message: any) {
    this.stompClient.send(
      '/app/chat.sendMessage',
      {},
      JSON.stringify(message)
    );
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }
}
