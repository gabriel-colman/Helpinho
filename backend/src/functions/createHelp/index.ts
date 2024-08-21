import { APIGatewayProxyHandler } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';
import dbService from '../../services/dbService';
import { Help } from '../../models/help';

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const data = JSON.parse(event.body || '{}');

        const newHelp: Help = {
            id: uuidv4(), // Gera um ID único
            ...data,
            createdAt: new Date().toISOString(),
        };

        await dbService.putItem('HelpTable', newHelp);

        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Helpinho criado com sucesso!', help: newHelp }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao criar Helpinho', error }),
        };
    }
};
