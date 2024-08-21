import * as AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const dbService = { // Aqui, estamos definindo um objeto chamado dbService que contém funções para interagir com o DynamoDB
    async putItem(tableName: string, item: any) {
        const params = {
            TableName: tableName,
            Item: item,
        };
        return dynamoDB.put(params).promise();
    },

    async scanTable(tableName: string) { // Aqui, estamos definindo uma função chamada scanTable que recebe o nome de uma tabela e retorna uma Promise que resolve com os itens da tabela
        const params = {
            TableName: tableName,
        };
        const result = await dynamoDB.scan(params).promise();
        return result.Items;
    },

    async updateItem(tableName: string, key: any, updates: any) { // Aqui, estamos definindo uma função chamada updateItem que recebe o nome de uma tabela, uma chave e um objeto com os campos a serem atualizados
        const updateExpression = 'set ' + Object.keys(updates).map((k) => `${k} = :${k}`).join(', ');
        const expressionAttributeValues = Object.keys(updates).reduce((acc: { [key: string]: any }, k) => {
            acc[`:${k}`] = updates[k];
            return acc;
        }, {});
        

        const params = {
            TableName: tableName,
            Key: key,
            UpdateExpression: updateExpression,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW',
        };

        const result = await dynamoDB.update(params).promise();
        return result.Attributes;
    },

    async getItemByEmail(tableName: string, email: string) { // Aqui, estamos definindo uma função chamada getItemByEmail que recebe o nome de uma tabela e um email e retorna uma Promise que resolve com o item correspondente ao email
        const params = {
            TableName: tableName,
            IndexName: 'EmailIndex',
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': email,
            },
        };

        const result = await dynamoDB.query(params).promise();
        return result.Items?.[0];
    },
};

export default dbService;
