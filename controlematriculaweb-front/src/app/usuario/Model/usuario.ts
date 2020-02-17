import { Perfil } from './perfil';

export class Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    ativo: boolean;
    perfil: Perfil;
}