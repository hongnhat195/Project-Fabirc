"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Group_user.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "users",
            schema: "fabric",
          },
          key: "id",
        },
        resource_id: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: "resources",
              schema: "fabric",
            },
            key: "id",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "group_user",
      schema: "fabric",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Group_user;
};
