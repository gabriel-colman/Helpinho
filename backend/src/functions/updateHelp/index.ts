import { APIGatewayProxyHandler } from 'aws-lambda';
import dbService from '../../services/dbService';

export const handler: APIGatewayProxyHandler = async (event) => { // Aqui, estamos definindo um handler que recebe um evento do tipo APIGatewayProxyEvent e retorna um objeto do tipo Promise<APIGatewayProxyResult>
    try {
        const id = event.pathParameters?.id;
        const data = JSON.parse(event.body || '{}');

        const updatedHelp = await dbService.updateItem('HelpTable', { id }, data);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Helpinho atualizado com sucesso!', help: updatedHelp }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao atualizar Helpinho', error }),
        };
    }
};
