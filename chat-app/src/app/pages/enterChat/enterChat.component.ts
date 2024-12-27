import { Component, inject } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {WebsocketService} from "../../websocket.sevice";

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './enterChat.component.html',
  styleUrl: './enterChat.component.css'
})
export default class EnterChatComponent {
  protected username!: string;
  private websocketService: WebsocketService = inject(WebsocketService);
  private router: Router = inject(Router);

  connect() {
    if (this.username) {
      this.websocketService.connect(this.username);
      this.router.navigate(['/chat']);
    }
  }
}

