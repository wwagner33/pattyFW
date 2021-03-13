# Instalação no Sistema MacOS

## Instalação  e execução do MongoDB como serviço do MongoDB

```bash
sudo port search mongodb
sudo port install mongodb@4.4.4 #ou a versão que você precisar, acima de 4.4.4
sudo port load mongodb
```

### Instalação da ferramenta de administração do MongoDB

[MongoDB Compass] [www.mongodb.com/try/download/compass] 

[www.mongodb.com/try/download/compass]: (https://www.mongodb.com/try/download/compass)

## Instalação do NVM e configuração para uso do nodeJS LTS

```bash
sudo port install nvm
```

Entrar na pasta desejada e executar:
```bash
nvm use --lts
```
## Instalação das dependências e execução da aplicação

**Dentro da pasta da aplicação, executar:** 

```bash
npm install
npm run dev #para desenvolvimento
npm run start #para produção
```