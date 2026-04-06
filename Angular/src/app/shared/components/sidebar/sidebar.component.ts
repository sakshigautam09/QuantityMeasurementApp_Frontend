import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../core/services/auth.service';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
  emoji: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() loginClick = new EventEmitter<void>();

  auth = inject(AuthService);

  dashboardNav: NavItem[] = [
    { label: 'Home', icon: 'home', emoji: '🏠', route: '/home' }
  ];

  measureNav: NavItem[] = [
    { label: 'Length',      icon: 'straighten',    emoji: '📏', route: '/length' },
    { label: 'Weight',      icon: 'monitor_weight', emoji: '⚖️', route: '/weight' },
    { label: 'Volume',      icon: 'water_drop',    emoji: '💧', route: '/volume' },
    { label: 'Temperature', icon: 'thermostat',    emoji: '🌡️', route: '/temperature' }
  ];

  close() {
    this.open = false;
    this.openChange.emit(false);
  }

  logout() {
    this.auth.logout();
  }
}
