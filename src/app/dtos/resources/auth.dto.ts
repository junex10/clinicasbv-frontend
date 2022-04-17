export interface GetUserDTO {
    token: string;
    user: User;
}
interface User {
    id: number;
    email: string;    
}