'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Recents', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER
            },
            albumId: {
                type: Sequelize.STRING
            },
            songId: {
                type: Sequelize.STRING
            },
            avatarAlbum: {
                type: Sequelize.STRING
            },
            avatarSong: {
                type: Sequelize.STRING
            },
            titleSong: {
                type: Sequelize.STRING
            },
            artistSong: {
                type: Sequelize.STRING
            },
            dayRelease: {
                type: Sequelize.STRING
            },
            duartion: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Recents');
    }
};