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

# make data directory
sudo mkdir -p /opt/local/var/db/mongodb_data

# make logs directory
sudo mkdir -p /opt/local/var/log/mongodb

# make config directory
sudo mkdir -p /opt/local/etc/mongodb

sudo vim /opt/local/etc/mongodb/mongod.conf
Copy text below to mongod.conf:

# configuration file /opt/local/etc/mongodb/mongod.conf
# Store data alongside MongoDB instead of the default, /data/db/
dbpath = /opt/local/var/db/mongodb_data

# Only accept local connections
 bind_ip = 127.0.0.1

# Running as daemon
fork = true

# Take log
logpath = /opt/local/var/log/mongodb/mongodb.log
logappend = true
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
