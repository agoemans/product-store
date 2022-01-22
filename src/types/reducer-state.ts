import { LoadingStatus } from './status';

export interface ApplicationState {
    productList?: any[],
    status: LoadingStatus,
    error: string | null
}
