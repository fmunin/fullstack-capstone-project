#How to run project

Follow these steps to run the project in local development environment.

## Start up MongoDb locally

For development purposes this project used a locally installed MongoDb database.

To start up

1. Open windows Explorer to location of MongoDB executable
   C:\Program Files\MongoDB\Server\8.0\bin

2. Launch command window at this location.
3. Launch MongoDb using the following command

```
    mongod --dbpath c:\Mongodb\data\db
```

> The local database path must be manually created at least once.

## Launch to Node server for back end

The backend API endpoints are served from Node server.

1. In VS Code terminal window navigate to :

> giftlink-backend

> In same VS Code terminal run code

```
node app
```

## Build and Run React app

In VS Code navigate to

> giftlink-frontend

Run the following commands in the terminal

```
npm build
npm start
```

The application should open in a new browser tab.
