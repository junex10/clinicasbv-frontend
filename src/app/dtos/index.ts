// Login
import { LoginDTO } from "./request/login.dto";
import { RegisterParamsDTO } from './request/register.dto';

// Auth
import {
    CheckPermissionDTO
} from './request/auth.dto';

// Resources
import {
    GetUserDTO
} from './resources/auth.dto';

export {
    // Request
    LoginDTO,
    RegisterParamsDTO,
    CheckPermissionDTO,

    // Resources
    GetUserDTO
};