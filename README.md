# Digital-BookShop-API

This is a simple book management API built using Node.js, Express.js and MongoDB. The API provides user authentication, CRUD operations for managing book entries, filtering books by author or publication year, basic security measures like input validations.

## Features

* User Authentication: Users can log in with their email and password to access protected API endpoints. Endpoints can be switched form public to private according to your necessity.
* CRUD Operations: Users can create, read, update, and delete book entries.
* Filtering: Users can filter books by author or publication year.
* Security Measures: The API implements basic security measures like input validation to prevent common security vulnerabilities.

## Getting Started
Follow these steps to run the application locally on your machine:
1. Clone this repository to your local machine:
```
git clone https://github.com/Saraswat-Sachin/digital-bookshop
```
2. Navigate to the project directory:
```
cd digital-bookshop
```
3. Install dependencies using npm:
```
npm install
```
4. Configure your `.env` according to your needs.
5. Optional, but if you need to seed data initially or cleanup your db, run following commands:
For seeding data
```
npm run data:import
```
For cleanup
```
npm run data:destroy
```
6. Start the development server"
```
npm start
```

## Authors

Sachin Saraswat  
[@SachinSaraswat](sachinsaraswat161@gmail.com)

## Version History

* 0.1
    * Initial Release
