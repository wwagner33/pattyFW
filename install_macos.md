# Instalação no Sistema MacOS

## Instalação  e execução do MongoDB como serviço do MongoDB

```bash
# install xcode command line
xcode-select --install
#install macports
https://guide.macports.org/#installing.macports

#execute these commands:
sudo port search mongodb
sudo port install mongodb@4.4.4 #or later
sudo port load mongodb

#alternative Installation

## download mongoDB and paste on /opt/local.
## mongoDB Community Download](https://www.mongodb.com/try/download/community)

## include mongod and mongod/bin on PATH
sudo touch ˜/.bash_profile

## open .bash_profile
sudo nano ~/.bash_profile

## and put
export MONGO_PATH=/opt/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin

## make data directory
mkdir /data/db
sudo chown -R `id -un` /data/db #perssions to run

## you run mongod in Terminal to load mongoDB Server
```

### Instalação da ferramenta de administração do MongoDB

[MongoDB Compass](www.mongodb.com/try/download/compass) 



## Instalação do NVM e configuração para uso do nodeJS LTS

```bash
sudo port install nvm
source /opt/local/share/nvm/init-nvm.sh
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
