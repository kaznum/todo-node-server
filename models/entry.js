module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Entry", {
        title: DataTypes.STRING,
        details: DataTypes.STRING
      });
}
