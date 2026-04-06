import { Component, OnInit, inject, effect, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { QuantityService } from '../../core/services/quantity.service';
import { FlatHistoryItem } from '../history/history.component';

interface QuickCard {
  label: string;
  emoji: string;
  desc: string;
  route: string;
}

interface StatCard {
  emoji: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  auth   = inject(AuthService);
  router = inject(Router);
  private qSvc = inject(QuantityService);

  recentOps: FlatHistoryItem[] = [];
  totalOps = 0;

  quickCards: QuickCard[] = [
    { label: 'Length',      emoji: '📏', desc: 'Feet, Inches, Yards, CM',     route: '/length' },
    { label: 'Weight',      emoji: '⚖️', desc: 'KG, Gram, Pound',             route: '/weight' },
    { label: 'Volume',      emoji: '💧', desc: 'Litre, mL, Gallon',           route: '/volume' },
    { label: 'Temperature', emoji: '🌡️', desc: 'Celsius, Fahrenheit, Kelvin', route: '/temperature' }
  ];

  guestFeatures: StatCard[] = [
    { emoji: '📐', label: '4 Categories',      value: 'Length, Weight, Volume, Temp' },
    { emoji: '🔢', label: '5 Operations',      value: 'Convert, Compare, Add, Subtract, Divide' },
    { emoji: '📋', label: 'Full History',      value: 'Sign in to save all your results' },
  ];

  constructor() {
    effect(() => {
      const loggedIn = this.auth.isLoggedIn();
      if (loggedIn) {
        untracked(() => this.loadRecent());
      } else {
        this.recentOps = [];
        this.totalOps  = 0;
      }
    });
  }

  ngOnInit(): void {}

  loadRecent(): void {
    const ops = ['compare', 'convert', 'add', 'subtract', 'divide'];
    const all: FlatHistoryItem[] = [];
    let done = 0;
    ops.forEach(op => {
      this.qSvc.getHistoryByOperation(op).subscribe({
        next: (data: any[]) => {
          all.push(...data);
          done++;
          if (done === ops.length) {
            all.sort((a, b) => new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime());
            this.totalOps  = all.length;
            this.recentOps = all.slice(0, 5);
          }
        },
        error: () => { done++; }
      });
    });
  }

  getDisplayExpr(item: FlatHistoryItem): string {
    const op = item.Operation?.toLowerCase();
    if (op === 'convert') return `${item.ThisValue} ${item.ThisUnit} → ${item.ThatUnit}`;
    return `${item.ThisValue} ${item.ThisUnit}  ${item.ThatValue} ${item.ThatUnit}`;
  }

  getDisplayResult(item: FlatHistoryItem): string {
    if (item.IsError) return '⚠ Error';
    const op = item.Operation?.toLowerCase();
    if (op === 'compare') {
      const equal = item.ResultString === 'true' || item.ResultString === 'True' || item.ResultUnit === 'EQUAL';
      return equal ? '✅ Equal' : '❌ Not Equal';
    }
    if (op === 'divide') return `${this.roundTo(item.ResultValue ?? 0, 4)} (ratio)`;
    return `${this.roundTo(item.ResultValue ?? 0, 4)} ${item.ResultUnit}`;
  }

  roundTo(n: number, d: number): number {
    return Math.round(n * 10 ** d) / 10 ** d;
  }

  formatTime(ts: string): string {
    if (!ts) return '';
    const d = new Date(ts);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1)  return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHrs = Math.floor(diffMins / 60);
    if (diffHrs < 24)  return `${diffHrs}h ago`;
    return d.toLocaleDateString();
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
