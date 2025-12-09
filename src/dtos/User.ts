import { BaseDTO } from "./Base";

export interface UserDTO extends BaseDTO {
    
}

export interface CreateUserDTO {
    email: string;
    password: string;
    username: string;
}