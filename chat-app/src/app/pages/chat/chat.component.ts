import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {WebsocketService} from "../../websocket.sevice";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export default class ChatComponent implements OnInit {
  messages: any[] = [];
  message: string = '';

  private websocketService: WebsocketService = inject(WebsocketService);

  ngOnInit() {
    this.websocketService.getMessages().subscribe((message: any) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      const chatMessage = {
        content: this.message,
        type: 'CHAT',
      };
      this.websocketService.sendMessage(chatMessage);
      this.message = '';
    }
  }
}
