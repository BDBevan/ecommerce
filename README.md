# E-Commerce Back End

## Description

This project is an e-commerce back end built with Express.js and Sequelize, designed to facilitate the management of an online retail store. It connects to a PostgreSQL database and provides a robust API for handling categories, products, and tags, ensuring a seamless experience for managers in the retail industry.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Installation
1. Clone the repository
  - git clone https://github.com/BDBevan/ecommerce.git
  
2. Navigate to the project directory
  - cd ecommerce

3. Install the needed packages
   - npm install

4. Create your .env file with your DB credentials
   - DB_NAME=your_database_name
   - DB_USER=your_postgresql_username
   - DB_PASSWORD=your_postgresql_password

5. Run the following commands to create and seed your database
   - npx sequelize-cli db:create
   - npx sequelize-cli db:seed:all


## API routes 
The following API routes are available:

GET /api/categories - Retrieve all categories
GET /api/products - Retrieve all products
GET /api/tags - Retrieve all tags
POST /api/categories - Create a new category
PUT /api/categories/
- Update a category by ID
DELETE /api/categories/
- Delete a category by ID

## Usage
Run the server.js file using node. Insomnia can then be used for your GET, POST, PUT, DELETE tests. 

## Walkthrough video
Please see a walkthrough video demonstrating the functionality and acceptance criteria here :

https://drive.google.com/file/d/1LGzDLarScTmDYetPAc3EapBbhs-WrBbq/view



