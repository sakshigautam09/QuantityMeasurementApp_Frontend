import { Component } from '@angular/core';
import { OperationCardComponent } from '../../shared/components/operation-card/operation-card.component';
@Component({
  selector: 'app-length',
  standalone: true,
  imports: [OperationCardComponent],
  template: `<app-operation-card category="Length" emoji="📏" description="Compare, Convert, Add, Subtract, Divide length units"></app-operation-card>`
})
export class LengthComponent {}
