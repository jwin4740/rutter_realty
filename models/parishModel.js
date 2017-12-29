module.exports = function (sequelize, DataTypes) {
    var Parish = sequelize.define("parishes", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        STATE: {
            type: DataTypes.STRING
        },
        PARISH_NAME: {
            type: DataTypes.STRING
        },
        ADDRESS: {
            type: DataTypes.STRING
        },
        PRIEST: {
            type: DataTypes.STRING
        },
        CITYSTATEZIP: {
            type: DataTypes.STRING
        },
        FOUNDED: {
            type: DataTypes.STRING
        },
        WEBSITE: {
            type: DataTypes.STRING
        },
        MANAGER: {
            type: DataTypes.STRING
        },
        PHONE: {
            type: DataTypes.STRING
        },
        PHOTOURL: {
            type: DataTypes.STRING
        },
        CITYSTATE: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true // won't automatically capitalize table name
    });
    return Parish;
}