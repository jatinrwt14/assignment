export interface CommonAPIResponse<T = any> {
    success?: boolean;
    data?: T;
    message?: string
    error?: string
}