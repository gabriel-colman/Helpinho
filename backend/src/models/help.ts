export interface Help { // Aqui, estamos definindo uma interface chamada Help que representa um Helpinho
    id: string;
    title: string;
    description: string;
    goal: number;
    creatorName: string;
    category: string;
    deadline: string;
    bankInfo: string;
    createdAt: string;
    receivedAmount?: number; // Campo opcional para valores recebidos
}
