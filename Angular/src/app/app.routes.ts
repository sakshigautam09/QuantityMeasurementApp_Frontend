import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'QuantiCalc — Home'
  },
  {
    path: 'length',
    loadComponent: () =>
      import('./features/length/length.component').then(m => m.LengthComponent),
    title: 'QuantiCalc — Length'
  },
  {
    path: 'weight',
    loadComponent: () =>
      import('./features/weight/weight.component').then(m => m.WeightComponent),
    title: 'QuantiCalc — Weight'
  },
  {
    path: 'volume',
    loadComponent: () =>
      import('./features/volume/volume.component').then(m => m.VolumeComponent),
    title: 'QuantiCalc — Volume'
  },
  {
    path: 'temperature',
    loadComponent: () =>
      import('./features/temperature/temperature.component').then(m => m.TemperatureComponent),
    title: 'QuantiCalc — Temperature'
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./features/history/history.component').then(m => m.HistoryComponent),
    title: 'QuantiCalc — History'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
