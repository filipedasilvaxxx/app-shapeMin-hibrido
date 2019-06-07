export class Produto {

    id: string;
    nome: string;
    marca: string;
    informacao: string;
    codigo: string;
    endereco: string;
    img : string;



    constructor() {
    }

    // Dados do firebase
    setDados(obj: any) {
        this.nome = obj.nome;
        this.marca = obj.marca;
        this.informacao = obj.informacao;
        this.codigo = obj.codigo;
        
    }
}