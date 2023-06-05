import { BaseError } from './BaseError';

export class ValidationError extends BaseError {
  status: number;
  validationError: unknown;
  constructor(message: string, validationError: unknown, status: number) {
    super(message);
    this.status = status;
    this.validationError = validationError;
  }
}
