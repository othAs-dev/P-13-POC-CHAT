import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/username/username.component'),
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
