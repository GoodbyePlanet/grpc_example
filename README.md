### Example of gRPC project

order-service - Java

user-service - Python

api-gateway - Typescript

### How to start the app

#### Order Service

```bash
mvn clean install
```

Types will be generated with Maven plugin. Check out `pom.xml` file. 
Run the Java app in your IDE.

#### API Gateway

```bash
cd api-gateway
npm install

npm run build:order:proto
npm run build:user:proto

npm run dev
```
You will see few errors in console, that's fine because there is no TS types for `userService.ts` until they are
generated with above scripts.

#### User Service

```bash
cd user-service
# Make sure you have installed Python3 and pip
pip install -r requirements.txt

./scripts/build-order-proto.sh
./scripts/build-user-proto.sh

cd database
docker-compose up
cd ..
./scripts/run-server.sh
```