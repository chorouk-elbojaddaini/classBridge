import { Classe } from "./classe";

export class Course{
    constructor(public courseName:String,public description:String,public date:Date,public filePath:String,public classe:Classe){}
}