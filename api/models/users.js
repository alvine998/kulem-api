const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        status_email: {
            type: DataTypes.ENUM('waiting', 'verified'),
            allowNull: false
        },
        created_on: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        modified_on: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'users',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
        ]
    });
};