import { Component, inject } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {WebsocketService} from "../../websocketService.sevice";

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export default class UsernameComponent {
  protected username!: string;
  private websocketService: WebsocketService = inject(WebsocketService);
  private router: Router = inject(Router);

  connect() {
    console.log(this.username);
    if (this.username) {
      this.websocketService.connect(this.username);
      this.router.navigate(['/chat']);
    }
  }
}

