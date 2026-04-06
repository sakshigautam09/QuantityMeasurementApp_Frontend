// ─── Quantity ───
export interface QuantityDTO {
  Value: number;
  Unit: string;
  MeasurementType: string;
}

export interface OperationRequest {
  ThisQuantityDTO: QuantityDTO;
  ThatQuantityDTO: QuantityDTO;
}

export interface OperationResult {
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

// ─── Auth ───
export interface LoginRequest {
  Username: string;
  Password: string;
}

export interface RegisterRequest {
  Username: string;
  Email: string;
  Password: string;
}

export interface GoogleLoginRequest {
  IdToken: string;
}

export interface AuthResponse {
  Username: string;
  Email: string;
  Role: string;
  AccessToken: string;
  RefreshToken: string;
}

export interface AuthUser {
  username: string;
  email: string;
  role: string;
}

// ─── History ───
// Supports both PascalCase (from some .NET configs) and camelCase (default .NET JSON serialization)
export interface HistoryOperand {
  Value?: number;
  value?: number;
  UnitName?: string;
  unitName?: string;
  Category?: string;
  category?: string;
}

export interface HistoryResult {
  Value?: number;
  value?: number;
  UnitName?: string;
  unitName?: string;
}

export interface HistoryItem {
  // PascalCase variants
  OperationType?: string;
  Operand1?: HistoryOperand;
  Operand2?: HistoryOperand;
  Result?: HistoryResult;
  HasError?: boolean;
  ErrorMessage?: string;
  Timestamp?: string;

  // camelCase variants (default .NET JSON)
  operationType?: string;
  operand1?: HistoryOperand;
  operand2?: HistoryOperand;
  result?: HistoryResult;
  hasError?: boolean;
  errorMessage?: string;
  timestamp?: string;
}

// ─── Unit ───
export interface UnitOption {
  v: string;
  l: string;
}

export type MeasurementCategory = 'Length' | 'Weight' | 'Volume' | 'Temperature';
export type OperationType = 'compare' | 'convert' | 'add' | 'subtract' | 'divide';
