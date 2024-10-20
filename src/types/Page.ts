export type Pageable = {
  page: number;
  size: number;
};

export type PageDto<T> = {
  elems: T[];
  current_page: number;
  total_elems: number;
  total_pages: number;
};
