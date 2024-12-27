import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/enterChat/enterChat.component'),
      },
      {
        path: 'chat',
        loadComponent: () => import('./pages/chat/chat.component'),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
] as Routes;
