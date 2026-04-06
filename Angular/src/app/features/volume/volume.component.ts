import { Component } from '@angular/core';
import { OperationCardComponent } from '../../shared/components/operation-card/operation-card.component';
@Component({
  selector: 'app-volume',
  standalone: true,
  imports: [OperationCardComponent],
  template: `<app-operation-card category="Volume" emoji="💧" description="Compare, Convert, Add, Subtract, Divide volume units"></app-operation-card>`
})
export class VolumeComponent {}
