//var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }/*,
    date: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    }*/
  }
    /*{
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Post.belongsTo(models.Author, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }*/
  );
  return Burger;
};
