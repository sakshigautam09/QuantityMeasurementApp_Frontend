import { Component } from '@angular/core';
import { OperationCardComponent } from '../../shared/components/operation-card/operation-card.component';
@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [OperationCardComponent],
  template: `<app-operation-card category="Temperature" emoji="🌡️" description="Compare & Convert temperature units (Add/Subtract not supported)"></app-operation-card>`
})
export class TemperatureComponent {}
