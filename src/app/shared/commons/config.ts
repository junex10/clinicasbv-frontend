export const DOMAIN = 'http://localhost:4000';
export const HTTP_OPTIONS = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
export const HTTP_CONFIG = {
    baseURL: DOMAIN,
    timeout: 25000,
    headers: HTTP_OPTIONS
};