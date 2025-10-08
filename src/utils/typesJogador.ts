type Posicao = 'Goleiro' | 'Zagueiro' | 'Lateral' |
 'Volante' | 'Meia' | 'Atacante';
 type PePreferido = 'Direito'|'Esquerdo'|'Ambos';
 type StatusJogador = 'Ativo' | 'Lesionado' | 'Suspenso';

export interface Jogador {
    id: number;
    nome: string;
    apelido?: string;
    numeroCamisa: string;
    posicao: Posicao;
    dataNascimento: Date;
    naturalidade: string;
    nacionalidade: string;
    altura: number;
    pePreferido: PePreferido;
    telefone: string;
    email: string;
    documento: string;
    situacao: StatusJogador;
    foto?: string;
}