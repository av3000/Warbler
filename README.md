# Warbler - fullstack MERN Chat App

App uses [MongoDB](https://github.com/mongodb/mongo), [Express](https://github.com/expressjs/express), [React](https://github.com/facebook/react), [Redux](https://github.com/reduxjs/redux) and [Node.js](https://github.com/nodejs/node)

Clone repository:
```bash
git clone https://github.com/av3000/Warbler.git
```

## Used additional NPM libraries

### Back-end
- bcrypt
- body-parser
- cors
- jsonwebtoken
- mongoose
- dotenv

### Front-end

### Testing
- [httpie](https://github.com/jakubroztocil/httpie)
- 

## Start express server

Run express app:
```bash
cd Warbler/server
npm i
node index.js
```

for live express server updating:
```bash
npm install -g nodemon
```

## MongoDB setup for [ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

Make sure you are executing it all in root directory
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
mkdir mongodb-data

echo 'mongod --bind_ip=$IP --dbpath=mongodb-data --nojournal --rest "$@"' > mongod
// if you get error about equal sign use the line below
echo 'mongod --dbpath mongodb-data --nojournal "$@"' > mongod

chmod a+x mongod
```
In order to use mongoDB during the development, need to keep it running in the background and only from directory where it installed:
```bash
./mongod
```

Make sure you are back in repository "Warbler/server/" folder to add mongoose library for mongodb:
```bash
npm install mongoose --save