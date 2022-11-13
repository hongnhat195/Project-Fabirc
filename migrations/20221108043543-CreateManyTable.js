"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      { schema: "fabric", tableName: "resources" },
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        role: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
      }
    );

    await queryInterface.createTable(
      { schema: "fabric", tableName: "group_user" },
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "users",
              schema: "fabric",
            },
            key: "id",
          },
        },
        resource_id: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "resources",
              schema: "fabric",
            },
            key: "id",
          },
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
      },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: "fabric",
      tableName: "group_user",
    });
    await queryInterface.dropTable({
      schema: "fabric",
      tableName: "resources",
    });
  },
};
