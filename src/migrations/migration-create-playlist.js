'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Playlists', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            playlistId: {
                type: Sequelize.STRING
            },
            userId: {
                type: Sequelize.INTEGER
            },
            songId: {
                type: Sequelize.STRING
            },
            thumbnail: {
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            artist: {
                type: Sequelize.STRING
            },
            releasedDate: {
                type: Sequelize.STRING
            },
            namePlaylist: {
                type: Sequelize.STRING
            },
            duration: {
                type: Sequelize.INTEGER
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Playlists');
    }
};