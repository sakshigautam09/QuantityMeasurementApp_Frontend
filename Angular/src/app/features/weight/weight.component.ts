import { Component } from '@angular/core';
import { OperationCardComponent } from '../../shared/components/operation-card/operation-card.component';
@Component({
  selector: 'app-weight',
  standalone: true,
  imports: [OperationCardComponent],
  template: `<app-operation-card category="Weight" emoji="⚖️" description="Compare, Convert, Add, Subtract, Divide weight units"></app-operation-card>`
})
export class WeightComponent {}
