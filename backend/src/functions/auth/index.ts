import { APIGatewayProxyHandler } from 'aws-lambda';
import dbService from '../../services/dbService';

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const { email, password } = JSON.parse(event.body || '{}'); // Recebe email e senha do corpo da requisição

        const user = await dbService.getItemByEmail('UserTable', email);

        if (user && user.password === password) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Login bem-sucedido!', user }),
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ message: 'Credenciais inválidas' }),
            };
        }
    } catch (error) { 
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao autenticar usuário', error }),
        };
    }
};


