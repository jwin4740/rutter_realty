module.exports = function (sequelize, DataTypes) {
    var Quote = sequelize.define("quotes", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        QUOTE: {
            type: DataTypes.STRING
        },
        USED: {
            type: DataTypes.BOOLEAN
        },
        TIMES_USED: {
            type: DataTypes.INTEGER
        },
        DATE_LAST_USED: {
            type: DataTypes.STRING
        }

    }, {
        timestamps: false,
        freezeTableName: true // won't automatically capitalize table name
    });
    return Quote;
}