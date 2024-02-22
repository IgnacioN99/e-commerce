export interface ErrorResponse {
  errors: string[];
}

export interface SuccessResponse<T> {
  payload: T;
  metadata?: Metadata;
}

export interface Metadata {
  pagination?: Pagination;
}

export interface Pagination {
  prev: number;
  next: number;
  current: number;
  total: number;
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;


export interface Entity {
  // Common fields for all entities
}
