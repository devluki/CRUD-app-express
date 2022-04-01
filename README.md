# CRUD-app-express
Simple CMS app created in express with express-generator using pug template, mongoDB, mongoose.

To run app, create account in Atlas MongoDB, create config.js in main catalog. In config.js include: 

module.exports = 
{
    db: 'mongodb+srv://admin:password@cluster0.ktjzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    keySession: ['12345'],
    maxAgeSession: 24 * 60 * 60 * 1000
}
  
Replace password in db, with your key
  
$ npm install


Localhost is set to port: 3000.


Login: admin
Password: 123
