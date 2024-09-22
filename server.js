//const express = require('express');
//const routes = require('./routes');
// import sequelize connection

//const app = express();
//const PORT = process.env.PORT || 3001;

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

//app.use(routes);

// sync sequelize models to the database, then turn on the server
//app.listen(PORT, () => {
//  console.log(`App listening on port ${PORT}!`);
//});

//Chat input 

const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // Import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch(err => {
  console.error('Failed to sync database:', err);
});
