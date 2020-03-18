# retrobox-backend

A sprint retro box app backend

Run app:

```
npm start
```

Run database:

```
docker run -d -p 27017:27017 -v ~/data:/data/db --name mongodb  mongo
```

Run shell:

```
docker exec -it mongodb bash
```

```
mongo
```