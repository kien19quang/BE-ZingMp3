'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Recent extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    };
    Recent.init({
        userId: DataTypes.INTEGER,
        albumId: DataTypes.STRING,
        songId: DataTypes.STRING,
        avatarAlbum: DataTypes.STRING,
        avatarSong: DataTypes.STRING,
        titleSong: DataTypes.STRING,
        artistSong: DataTypes.STRING,
        dayRelease: DataTypes.STRING,
        duartion: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Recent',
        freezeTableName: true
    });
    return Recent;
};