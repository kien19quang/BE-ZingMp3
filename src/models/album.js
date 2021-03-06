'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Album extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    };
    Album.init({
        userId: DataTypes.INTEGER,
        avatar: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Album',
        freezeTableName: true
    });
    return Album;
};