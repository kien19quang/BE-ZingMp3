'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Song extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    };
    Song.init({
        userId: DataTypes.INTEGER,
        avatar: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Song',
        freezeTableName: true
    });
    return Song;
};