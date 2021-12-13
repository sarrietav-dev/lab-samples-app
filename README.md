# lab-samples-app

An app that manages health test appointments and types.\
Project made for MisionTic2021.

## Tech Stack

**Client:** NextJS, Bootstrap

**Server:** Node, Express

**Database**: MongoDB

## Run Locally

- First clone the repo:

```bash
git clone https://github.com/sarrietav-dev/lab-samples-app.git
```

- Change directory:

```bash
cd lab-sample-app
```

- Copy the .env.sample file and rename it to .env:

```bash
cd backend
cp .env.sample .env
```

### Environment variables

#### Create an account in MongoDB Atlas

1. Go to [MongoDB Cloud](https://cloud.mongodb.com/) and create an account.
2. Next, deploy a free cluster.
3. Connect the application to the cluster. Copy the connection string and paste it in the [MONGODB_CONN_STRING](https://github.com/sarrietav-dev/lab-samples-app/blob/db2450463ab63295dca8e465c85af2decf5e5ca7/backend/.env.sample#L1) variable in the .env file.

A more detailed walkthrough is available in the MongoDB Atlas docs: [Get Startet with Atlas](https://docs.atlas.mongodb.com/getting-started/)

#### Choose your most deepest secret

When you figure out which secret is, paste it in the [JWT_SECRET](https://github.com/sarrietav-dev/lab-samples-app/blob/d506b914324a4038dc6f35540a32280d5d9f05f8/backend/.env.sample#L2) variable in the .env file.

### Using Docker and Docker Compose

[Install Docker here](https://docs.docker.com/get-docker/)\
[Install Docker Compose here](https://docs.docker.com/compose/install/)

- Run `docker-compose` on the root directory:

```bash
docker-compose up
```

## Lessons Learned

Using `docker-compose`

## License

[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
