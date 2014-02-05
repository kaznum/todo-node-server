var Sequelize = require('sequelize');
var sequelize = new Sequelize("todo", "root", "", { host: "localhost", port: "3306" });

global.db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Entry: sequelize.import(__dirname + '/entry')
}
 
module.exports = global.db;
