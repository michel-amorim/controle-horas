export type PaginationResponseType<T> = {
  content: T[];
  totalPages: number;
  totalElements: number;
};

export const TotalPage = 10;
