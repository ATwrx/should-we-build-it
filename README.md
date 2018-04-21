Should We Build It 
==================

This app was created to answer the age old question of "should I build it?". 

The goal of this project is to give developers a space to share idea's, seek contributers, and just see if the project is even worth the effort. 

### Requirements
#### Node.js 
#### Yarn to substitute npm
#### Docker is required to deploy a local server. Otherwise you can deploy a prisma dev server.

### Install prisma and graphql-cli
#### (You can also use npm)
```shell
yarn global add prisma
yarn global add graphql-cli
```
then
```
git clone https://github.com/ATwrx/should-we-build-it
```

### Deploy a local Prisma Server
```shell
cd should-we-build-it/server
prisma deploy
```

Choose the local version if you have Docker installed.
Otherwise, deploy to a prisma dev server.
This might require extra configuration though.
Then: 
```
yarn install
yarn dev 
# if you don't want to start the Graphql Playground
# run this instead of yarn dev
yarn start
```

### Now, to start the react client 
```shell
cd ../
yarn install
yarn start
```

#### You're all set
### Better dcumention in the future.... 
