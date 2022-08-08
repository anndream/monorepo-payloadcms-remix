export interface Documents<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export { Pages } from "./Pages";
export { Sites } from "./Sites";
export { Users } from "./Users";
export { ApiUsers } from "./Users/apiUsers";
