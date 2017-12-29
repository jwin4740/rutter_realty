module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user_table", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true // won't automatically capitalize table name
    });
    return User;
}