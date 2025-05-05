import { Observable } from 'rxjs';

export type TotalElementsFn = (params: unknown) => Observable<{ totalElements?: number }>;
