export interface IUser {
    id: number,
    rpe: string,
    email1: string,
    email2: string,
    telefone1: string,
    telefone2: string,
    cia: string,
    sigla: string
}

export default class User implements IUser {
    id: number;
    rpe: string;
    email1: string;
    email2: string;
    telefone1: string;
    telefone2: string;
    cia: string;
    sigla: string;

    constructor() {
        this.id = 0;
        this.rpe = '';
        this.email1 = '';
        this.email2 = '';
        this.telefone1 = '';
        this.telefone2 = '';
        this.cia = '';
        this.sigla = '';
    }
}

