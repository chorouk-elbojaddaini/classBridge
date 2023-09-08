import { RegisterRequest } from "./register-request";

export class AuthenticationResponse{
    constructor(public jwtToken: string, public user: RegisterRequest) {}

}