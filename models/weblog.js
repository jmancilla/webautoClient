/* Object/Relational mapping for instances of the Order class.
     - classes correspond to tables
     - instances correspond to rows
    - fields correspond to columns
In other words, this code defines how a row in the postgres order table
maps to the JS Order object.
*/
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Weblog", {
    san: {type: DataTypes.STRING, unique: false, allowNull: false},
    done: {type: DataTypes.BOOLEAN},
    fail: {type: DataTypes.BOOLEAN}
  });
};
