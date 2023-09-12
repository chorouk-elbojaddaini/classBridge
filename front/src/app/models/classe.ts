import { RegisterRequest } from "./register-request";
import { User } from "./user";

export class Classe{

    constructor(public id:number,public fieldName:String,public module:string,public level:String,public classCode:string,public teacher:User){}
}