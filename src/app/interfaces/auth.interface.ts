import { CheckPermissionDTO, GetUserDTO, ResetParamsDTO } from "../dtos";

export interface IAUTH {
    setUser(data: any): any;
    getUser(): GetUserDTO;
    checkPermissions(form: CheckPermissionDTO): any;
    verify(token: string): any;
    recover(email: string): any;
    sendOtp(otp: string): any;
    reset(form: ResetParamsDTO): any;
}