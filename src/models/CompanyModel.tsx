export interface ICompany {
    id: number,
	cia: string,
	sigla: string,
	cnpj: string,
	pais: string,
	gerente: string,
	telefoneGerente1: string,
	telefoneGerente2: string,
	emailGerente1: string,
	emailGerente2: string,
	responsavel1: string,
	responsavel2: string,
	responsavel3: string,
	responsavel4: string,
	responsavel5: string,
	responsavel6: string,
	responsavel7: string,
	responsavel8: string,
	responsavel9: string,
	responsavel10: string,
}

export default class Company implements ICompany {
    id: number;
	cia: string;
	sigla: string;
	cnpj: string;
	pais: string;
	gerente: string;
	telefoneGerente1: string;
	telefoneGerente2: string;
	emailGerente1: string;
	emailGerente2: string;
	responsavel1: string;
	responsavel2: string;
	responsavel3: string;
	responsavel4: string;
	responsavel5: string;
	responsavel6: string;
	responsavel7: string;
	responsavel8: string;
	responsavel9: string;
    responsavel10: string;
    
    constructor(){
        this.id = 0;
        this.cia = '';
		this.sigla = '';
		this.cnpj = '';
		this.pais = '';
		this.gerente = '';
		this.telefoneGerente1 = '';
		this.telefoneGerente2 = '';
		this.emailGerente1 = '';
		this.emailGerente2 = '';
		this.responsavel1 = '';
		this.responsavel2 = '';
		this.responsavel3 = '';
		this.responsavel4 = '';
		this.responsavel5 = '';
		this.responsavel6 = '';
		this.responsavel7 = '';
		this.responsavel8 = '';
		this.responsavel9 = '';
		this.responsavel10 = '';
    }
}