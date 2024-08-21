import { APIGatewayProxyHandler } from 'aws-lambda';
import dbService from '../../services/dbService';

export const handler: APIGatewayProxyHandler = async () => { // Aqui, estamos definindo um handler que recebe um evento do tipo APIGatewayProxyEvent e retorna um objeto do tipo Promise<APIGatewayProxyResult>
    try {
        const helps = await dbService.scanTable('HelpTable');

        return {
            statusCode: 200,
            body: JSON.stringify({ helps }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao buscar Helpinhos', error }),
        };
    }
};
