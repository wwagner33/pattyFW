
# Instalação no Sistema Linux (Ubuntu)

## instalação local:

### Pode ser desta forma:
```bash
nvm
nvm install node #última versão
npm install #última versão
npm install mongoose --save
# instala dependências definidas no package.json
```
### Ou desta forma:
```bash
npm install --save-dev nodemon
npm install express --save
npm install morgan --save
npm install --save body-parser
```
## Descrição dos módulos usados
> express: framework web
> nodemon: reinicia servidor web quando houver alteracao
> morgan: cuida dos logs na aplicação

## Instalação do MongoDB
Acessar o instalador no site do MongoDB ou usar um gerenciador de pacotes do SO desejado.
### Observações:
> instalar mongoDB
Deve-se verificar se a pasta de banco foi criada, /data/db para o MongoDB. Caso precise colocar a pasta em um diretorio diferente do padrão, faça o MongoDB veja essa nova pasta através do comando mongod --dbpath /<sua_pasta_db>


## Execução da aplicação:

### Para uso em desenvolvimento:
```bash
mongod (executar no drive q tem a pasta data\db)
npm run dev
```

### Para uso em produção:
```bash
npm run start
```

### Observação:
> Testar api com app postman do chrome

