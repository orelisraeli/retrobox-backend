# retrobox-backend

A sprint retro box app backend

## Instructions

Add an environment `.env` file to the root of this project

Add a variable `MONGO_DB_ADDRESS` to `.env` and give it a value

```
MONGO_DB_ADDRESS=mongodb://localhost:27017/retro
```

Run the app:

```
npm start
```

Run database:

```
docker run -d -p 27017:27017 -v ~/data:/data/db --name mongodb  mongo
```

### Show mongo shell

```
docker exec -it mongodb bash
```

```
mongo
```