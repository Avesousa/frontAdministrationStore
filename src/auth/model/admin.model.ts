import { UserI } from "../interface/user.interface";

export class Admin implements UserI{
    id: number;
    mail: string;
    name: string;
    password: string;
    store: string;

    constructor(){
        this.mail = '';
        this.password = '';
    }
}