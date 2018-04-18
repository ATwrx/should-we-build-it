Should We Build It 
==================

This app was created to answer the age old question of "should I build it?". 

The goal of this project is to give developers a space to share idea's, seek contributers, and just see if the project is even worth the effort. 

#### Docker is required to deploy a local server. Otherwise you can deploy a prisma dev server.

#### Install prisma and graphql-cli

```shell
npm i -g prisma
npm i -g graphql-cli
```

or

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

```shell
npm install
npm start
```
or
```
yarn install
yarn start
```


### Now, to start the react client 

```shell
cd ../
npm install
npm start
```

or

```shell
yarn install
yarn start
```


#### You're all set


### Better Documention in the future.... 
