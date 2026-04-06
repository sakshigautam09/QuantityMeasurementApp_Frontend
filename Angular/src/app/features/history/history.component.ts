import { Component, OnInit, inject, effect, ChangeDetectorRef, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../core/services/auth.service';
import { QuantityService } from '../../core/services/quantity.service';
import { AuthDialogComponent } from '../auth/auth-dialog.component';
import { forkJoin } from 'rxjs';

type HistoryFilter = 'all' | 'compare' | 'convert' | 'add' | 'subtract' | 'divide'
                   | 'length' | 'weight' | 'volume' | 'temperature';

export interface FlatHistoryItem {
  ThisValue: number;
  ThisUnit: string;
  ThisMeasurementType: string;
  ThatValue: number;
  ThatUnit: string;
  ThatMeasurementType: string;
  Operation: string;
  ResultString: string;
  ResultValue: number | null;
  ResultUnit: string;
  ResultMeasurementType: string;
  ErrorMessage: string | null;
  IsError: boolean;
  Timestamp: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  auth   = inject(AuthService);
  dialog = inject(MatDialog);
  private qSvc = inject(QuantityService);
  private cdr  = inject(ChangeDetectorRef);

  activeFilter: HistoryFilter = 'all';
  items: FlatHistoryItem[] = [];
  loading = false;
  error = '';

  filters = [
    { label: 'All',         value: 'all' as HistoryFilter },
    { label: 'Compare',     value: 'compare' as HistoryFilter },
    { label: 'Convert',     value: 'convert' as HistoryFilter },
    { label: 'Add',         value: 'add' as HistoryFilter },
    { label: 'Subtract',    value: 'subtract' as HistoryFilter },
    { label: 'Divide',      value: 'divide' as HistoryFilter },
    { label: 'Length',      value: 'length' as HistoryFilter },
    { label: 'Weight',      value: 'weight' as HistoryFilter },
    { label: 'Volume',      value: 'volume' as HistoryFilter },
    { label: 'Temperature', value: 'temperature' as HistoryFilter }
  ];

  constructor() {
    effect(() => {
      const loggedIn = this.auth.isLoggedIn();
      if (loggedIn) {
        untracked(() => this.load());
      } else {
        this.items = [];
        this.loading = false;
        this.error = '';
        this.cdr.detectChanges();
      }
    });
  }

  ngOnInit(): void {}

  openLogin(): void {
    this.dialog.open(AuthDialogComponent, {
      width: '420px',
      maxWidth: '95vw',
      panelClass: 'qc-dialog-panel'
    });
  }

  setFilter(f: HistoryFilter): void {
    this.activeFilter = f;
    this.load();
  }

  load(): void {
    if (!this.auth.isLoggedIn()) return;
    this.loading = true;
    this.error   = '';
    this.cdr.detectChanges();

    const ops = ['compare', 'convert', 'add', 'subtract', 'divide'];
    const typeFilters = ['length', 'weight', 'volume', 'temperature'];

    const sortByTime = (arr: FlatHistoryItem[]) =>
      arr.sort((a, b) => new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime());

    const done = (data: any[]) => {
      this.items   = sortByTime(data as FlatHistoryItem[]);
      this.loading = false;
      this.cdr.detectChanges();
    };

    const fail = (err: Error) => {
      this.error   = err.message;
      this.loading = false;
      this.cdr.detectChanges();
    };

    if (this.activeFilter === 'all') {
      forkJoin(ops.map(op => this.qSvc.getHistoryByOperation(op))).subscribe({
        next: (results) => done((results as any[][]).flat()),
        error: fail
      });
    } else if (ops.includes(this.activeFilter)) {
      this.qSvc.getHistoryByOperation(this.activeFilter).subscribe({ next: done, error: fail });
    } else if (typeFilters.includes(this.activeFilter)) {
      this.qSvc.getHistoryByType(this.activeFilter).subscribe({ next: done, error: fail });
    }
  }

  getDisplayExpr(item: FlatHistoryItem): string {
    const op = item.Operation?.toLowerCase();
    if (op === 'convert') {
      return `${item.ThisValue} ${item.ThisUnit}  →  ${item.ThatUnit}`;
    }
    return `${item.ThisValue} ${item.ThisUnit}   ${item.ThatValue} ${item.ThatUnit}`;
  }

  getDisplayResult(item: FlatHistoryItem): string {
    if (item.IsError) return `⚠ ${item.ErrorMessage || 'Error'}`;
    const op = item.Operation?.toLowerCase();
    if (op === 'compare') {
      const equal = item.ResultString === 'true' || item.ResultString === 'True' || item.ResultUnit === 'EQUAL';
      return equal ? '✅ Equal' : '❌ Not Equal';
    }
    if (op === 'convert') return `= ${this.roundTo(item.ResultValue ?? 0, 6)} ${item.ResultUnit}`;
    if (op === 'divide')  return `= ${this.roundTo(item.ResultValue ?? 0, 6)}  (ratio)`;
    return `= ${this.roundTo(item.ResultValue ?? 0, 6)} ${item.ResultUnit}`;
  }

  roundTo(n: number, d: number): number {
    return Math.round(n * 10 ** d) / 10 ** d;
  }

  formatTime(ts: string): string {
    return ts ? new Date(ts).toLocaleString() : '';
  }
}
