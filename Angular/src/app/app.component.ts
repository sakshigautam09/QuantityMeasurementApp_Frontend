import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';

import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ToastComponent }   from './shared/components/toast/toast.component';
import { AuthDialogComponent } from './features/auth/auth-dialog.component';
import { AuthService } from './core/services/auth.service';
import { environment } from '../environments/environment';

interface PageMeta { title: string; accent: string; }

const PAGE_TITLES: Record<string, PageMeta> = {
  '/home':        { title: 'Dashboard',    accent: 'Overview'    },
  '/length':      { title: 'Length',       accent: 'Operations'  },
  '/weight':      { title: 'Weight',       accent: 'Operations'  },
  '/volume':      { title: 'Volume',       accent: 'Operations'  },
  '/temperature': { title: 'Temperature',  accent: 'Operations'  },
  '/history':     { title: 'Operation',    accent: 'History'     },
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private dialog = inject(MatDialog);
  auth = inject(AuthService);

  sidebarOpen = signal(false);
  apiOnline   = signal(false);
  pageMeta    = signal<PageMeta>({ title: 'Dashboard', accent: 'Overview' });

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const meta = PAGE_TITLES[e.urlAfterRedirects] ?? { title: 'Dashboard', accent: 'Overview' };
        this.pageMeta.set(meta);
        this.sidebarOpen.set(false);
      });

    this.checkApi();
  }

  private async checkApi(): Promise<void> {
    try {
      const base = environment.apiBase.replace('/api/v1', '');
      const res  = await fetch(`${base}/health`);
      this.apiOnline.set(res.ok);
    } catch {
      this.apiOnline.set(false);
    }
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  openAuthDialog(): void {
    this.dialog.open(AuthDialogComponent, {
      width:     '420px',
      maxWidth:  '95vw',
      maxHeight: '95vh',   // ← Prevents dialog from going off screen
      panelClass: 'qc-dialog-panel'
    });
  }
}