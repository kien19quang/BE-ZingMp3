"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlaylistFavorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlaylistFavorite.init(
    {
      encodeId: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      thumbnailM: DataTypes.STRING,
      title: DataTypes.STRING,
      artistsNames: DataTypes.STRING,
      albumTitle: DataTypes.STRING,
      duration: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PlaylistFavorite",
      freezeTableName: true,
    }
  );
  return PlaylistFavorite;
};
