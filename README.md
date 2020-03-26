# service-shop

API endpoints

- Login route
```
routes.post('/sessions', SessionController.store); // user authentication
```
- Enterprise routes
```
routes.get('/enterprises', EnterpriseController.index); // enterprises list
routes.post('/enterprises', EnterpriseController.store); // create enterprise
```
- Service routes
```
routes.post('/services', ServiceController.store); // services create
routes.get('/services', ServiceController.index); // services list
routes.delete('/services/:id', ServiceController.delete); // services delete
```
- Profile route
```
routes.get('/profile', ProfileController.index); // specific services list
```

Entities
- Enterprise
- Service(product)

Functionalities
- Enterprise should register in the app
- Enterprise should login in the app
- Enterprise should logout in the app
- Enterprise should register new products in the app
- Enterprise should delete products in the app
- Enterprise should update products in the app
- Enterprise list/consult specifics products of an enterprise
- List/consult all the products
- User/custumer should should contact the services/enterprise

DB version control
- knex migrations

```
yarn knex migrate:make create_enterpises // create database enterprises
yarn knex migrate:latest // update migrations
yarn knex migrate:make create_services // create database services

yarn knex migrate:rollback // rollback the latest update, drop create_services table
yarn knex migrate:latest // update migrations, redo create_services table
```
refactor sql db using knex to use ORM sequelize
