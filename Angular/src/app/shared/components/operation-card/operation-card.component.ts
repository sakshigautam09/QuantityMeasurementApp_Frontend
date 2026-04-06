import { Component, Input, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { QuantityService } from '../../../core/services/quantity.service';
import { ToastService } from '../../../core/services/toast.service';
import { UnitOption, OperationResult, MeasurementCategory, OperationType } from '../../../core/models/models';
import { ALL_OPS, TEMP_OPS, OP_LABELS, OP_SYMBOLS, UNIT_LABELS } from '../../../core/models/units.constants';

@Component({
  selector: 'app-operation-card',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatCardModule, MatButtonModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatProgressSpinnerModule
  ],
  templateUrl: './operation-card.component.html',
  styleUrls: ['./operation-card.component.scss']
})
export class OperationCardComponent implements OnInit {
  @Input() category!: MeasurementCategory;
  @Input() emoji = '';
  @Input() description = '';

  private fb    = inject(FormBuilder);
  private qSvc  = inject(QuantityService);
  private toast = inject(ToastService);
  private cdr   = inject(ChangeDetectorRef);

  ops: OperationType[]    = [];
  activeOp: OperationType = 'convert';
  units: UnitOption[]     = [];
  opLabels  = OP_LABELS;
  opSymbols = OP_SYMBOLS;

  form!: FormGroup;
  loading     = false;
  result: OperationResult | null = null;
  resultError = '';

  ngOnInit(): void {
    this.ops   = (this.category === 'Temperature' ? TEMP_OPS : ALL_OPS) as OperationType[];
    this.units = UNIT_LABELS[this.category] || [];
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      v1: [null, Validators.required],
      u1: [this.units[0]?.v, Validators.required],
      v2: [null],
      u2: [this.units[1]?.v || this.units[0]?.v, Validators.required]
    });
    this.result      = null;
    this.resultError = '';
  }

  selectOp(op: OperationType): void {
    this.activeOp = op;
    this.buildForm();
  }

  get isSingleValue(): boolean { return this.activeOp === 'convert'; }
  get opSymbol(): string       { return OP_SYMBOLS[this.activeOp] || ''; }

  // ✅ Map display name → backend MeasurementType (must be UPPERCASE)
  private get measurementType(): string {
    const map: Record<string, string> = {
      Length:      'LENGTH',
      Weight:      'WEIGHT',
      Volume:      'VOLUME',
      Temperature: 'TEMPERATURE'
    };
    return map[this.category] ?? this.category.toUpperCase();
  }

  run(): void {
    const raw = this.form.value;
    const v1  = parseFloat(raw.v1);

    if (raw.v1 === null || raw.v1 === '' || isNaN(v1)) {
      this.toast.error('Please enter a valid value.');
      return;
    }

    if (!this.isSingleValue) {
      const v2 = parseFloat(raw.v2);
      if (raw.v2 === null || raw.v2 === '' || isNaN(v2)) {
        this.toast.error('Please enter the second value.');
        return;
      }
    }

    const v2 = this.isSingleValue ? 0 : parseFloat(raw.v2);
    const u1 = raw.u1;
    const u2 = raw.u2;

    // ✅ Matches backend QuantityRequestDto exactly
    // Value + Unit + MeasurementType (UPPERCASE)
    const body = {
      ThisQuantityDTO: { Value: v1, Unit: u1, MeasurementType: this.measurementType },
      ThatQuantityDTO: { Value: v2, Unit: u2, MeasurementType: this.measurementType }
    };

    this.loading     = true;
    this.result      = null;
    this.resultError = '';

    this.qSvc.runOperation(this.activeOp, body).subscribe({
      next: (res: any) => {
        this.loading = false;
        console.log('API response:', res);

        const isError = res.IsError ?? res.isError ?? false;
        if (isError) {
          this.resultError = res.ErrorMessage || res.errorMessage || 'An error occurred.';
          this.toast.error(this.resultError);
          this.cdr.detectChanges();
        } else {
          this.result = {
            IsError:               false,
            ErrorMessage:          null,
            ResultValue:           res.ResultValue  ?? res.resultValue  ?? null,
            ResultUnit:            res.ResultUnit   ?? res.resultUnit   ?? '',
            ResultString:          res.ResultString ?? res.resultString ?? '',
            ResultMeasurementType: res.ResultMeasurementType ?? '',
            ThisValue:             res.ThisValue ?? 0,
            ThisUnit:              res.ThisUnit  ?? '',
            ThisMeasurementType:   res.ThisMeasurementType ?? '',
            ThatValue:             res.ThatValue ?? 0,
            ThatUnit:              res.ThatUnit  ?? '',
            ThatMeasurementType:   res.ThatMeasurementType ?? '',
            Operation:             res.Operation ?? '',
            Timestamp:             res.Timestamp ?? ''
          };
          this.toast.success(`${this.activeOp.charAt(0).toUpperCase() + this.activeOp.slice(1)} successful`);
          this.cdr.detectChanges();
        }
      },
      error: (err: Error) => {
        this.loading     = false;
        this.resultError = err.message;
        this.toast.error(err.message);
        this.cdr.detectChanges();
      }
    });
  }

  get displayResult(): string {
    if (!this.result) return '';
    if (this.activeOp === 'compare') {
      const isEqual =
        this.result.ResultUnit   === 'EQUAL' ||
        this.result.ResultString === 'true'  ||
        this.result.ResultString === 'True';
      return isEqual ? '✅ Equal' : '❌ Not Equal';
    }
    if (this.activeOp === 'divide') {
      return `${this.roundTo(this.result.ResultValue ?? 0, 6)}  (ratio)`;
    }
    return `${this.roundTo(this.result.ResultValue ?? 0, 6)} ${this.result.ResultUnit ?? ''}`;
  }

  get displayDetail(): string {
    if (!this.result) return '';
    const { v1, u1, v2, u2 } = this.form.value;
    if (this.activeOp === 'convert') return `${v1} ${u1}  →  ${u2}`;
    if (this.activeOp === 'compare') return `${v1} ${u1}  vs  ${v2} ${u2}`;
    return `${v1} ${u1}  ${this.activeOp}  ${v2} ${u2}`;
  }

  private roundTo(n: number, d: number): number {
    return Math.round(n * 10 ** d) / 10 ** d;
  }
}
