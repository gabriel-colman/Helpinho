# **Documentação do Projeto Helpinho**

## **Visão Geral**
Helpinho é uma plataforma onde usuários podem pedir e oferecer ajuda. Este documento descreve o processo de desenvolvimento do frontend e backend, desde a configuração inicial até o deploy em produção.

## **Estrutura do Projeto**

### **Backend**
- **Tecnologias:** Node.js, TypeScript, AWS (Lambda, DynamoDB), Serverless Framework.
- **Estrutura:**
  - `src/functions`: Contém funções Lambda para CRUD de Helpinhos e autenticação de usuários.
  - `src/models`: Modelos TypeScript que representam as entidades de dados.
  - `src/services`: Serviços para comunicação com DynamoDB.
- **Deploy:** Realizado usando Serverless Framework, que gerencia as funções Lambda e os recursos AWS.

### **Frontend**
- **Tecnologias:** Angular v17, Tailwind CSS.
- **Estrutura:**
  - `src/app/components`: Componentes para listagem, criação, visualização de Helpinhos e autenticação.
  - `src/app/services`: Serviços Angular para comunicação com o backend.
  - `src/app/models`: Modelos TypeScript para tipagem de dados no frontend.
- **Deploy:** Realizado usando Netlify, que hospeda o frontend em uma CDN global.

## **Passos de Desenvolvimento**

### **Configuração Inicial**

1. **Backend:**
   - Clonamos o repositório e configuramos o ambiente Node.js com as dependências necessárias.
   - Criamos a estrutura de pastas e arquivos para organizar as funções Lambda, serviços, e modelos.
   - Configuramos o TypeScript e Serverless Framework para facilitar o desenvolvimento e deploy.

2. **Frontend:**
   - Criamos o projeto Angular e instalamos o Tailwind CSS para estilização.
   - Geramos componentes para cada funcionalidade da plataforma e configuramos serviços para comunicação com o backend.

### **Testes**

1. **Backend:**
   - Configuramos o Jest para testes unitários das funções Lambda.
   - Criamos testes básicos para garantir a funcionalidade correta das operações CRUD.

2. **Frontend:**
   - Utilizamos Jasmine/Karma para testes unitários dos componentes Angular.
   - Garantimos que os componentes principais funcionem conforme esperado.

### **Deploy**

1. **Backend:**
   - Configuramos credenciais da AWS e realizamos o deploy das funções Lambda usando o Serverless Framework.

2. **Frontend:**
   - Compilamos o projeto Angular e realizamos o deploy no Netlify, configurando redirecionamentos conforme necessário.

### **Git Ignore**

- Configuramos um arquivo `.gitignore` para excluir arquivos desnecessários do controle de versão, incluindo `node_modules`, diretórios de build, e arquivos de configuração específicos de IDE.

### **Considerações Finais**

O projeto foi desenvolvido com foco em modularidade e facilidade de manutenção. A estrutura do código permite fácil expansão e integração com novos recursos e serviços.

Se você tiver alguma dúvida ou precisar de mais detalhes, consulte a documentação específica em cada parte do projeto ou entre em contato.
